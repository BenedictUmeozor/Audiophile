"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendOrderEmailParams {
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  items: Array<{
    productName: string;
    price: number;
    quantity: number;
  }>;
  subtotal: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  shippingAddress: string;
  shippingCity: string;
  shippingZipCode: string;
  shippingCountry: string;
  orderId: string;
}

export async function sendOrderEmail(params: SendOrderEmailParams) {
  try {
    const {
      customerName,
      customerEmail,
      orderNumber,
      items,
      subtotal,
      shipping,
      vat,
      grandTotal,
      shippingAddress,
      shippingCity,
      shippingZipCode,
      shippingCountry,
      orderId,
    } = params;

    // Generate order items HTML
    const itemsHTML = items
      .map(
        (item) => `
        <tr>
          <td style="padding: 12px; font-size: 14px; border-bottom: 1px solid #f1f1f1; color: #101010;">${item.productName}</td>
          <td align="center" style="padding: 12px; font-size: 14px; border-bottom: 1px solid #f1f1f1; color: #101010;">${item.quantity}</td>
          <td align="right" style="padding: 12px; font-size: 14px; border-bottom: 1px solid #f1f1f1; color: #101010;">$${item.price.toLocaleString()}</td>
        </tr>
      `,
      )
      .join("");

    // Full shipping address
    const fullAddress = `${shippingAddress}, ${shippingCity}, ${shippingZipCode}, ${shippingCountry}`;

    // Order view URL
    const orderURL = `https://audiophile-hng.vercel.app/orders/${orderId}`;

    const emailHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Order Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #fafafa; font-family: Arial, sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fafafa; padding: 30px 0;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; max-width: 600px;">
<tr>
<td style="background-color: #101010; padding: 24px; text-align: center;">
<img src="https://audiophile-hng.vercel.app/assets/logo.png" alt="Audiophile" style="height: 25px;">
</td>
</tr>
<tr>
<td style="padding: 32px;">
<h1 style="font-size: 24px; font-weight: 700; line-height: 32px; margin: 0 0 16px; color: #101010;">Thank you for your order, ${customerName}!</h1>
<p style="font-size: 15px; line-height: 25px; margin: 0 0 24px; color: #101010;">We're happy to let you know that we've received your purchase (Order <strong>#${orderNumber}</strong>). Below is a summary of your order.</p>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
<thead>
<tr>
<th align="left" style="padding: 12px; background-color: #f1f1f1; font-size: 13px; font-weight: 700; color: #101010;">Product</th>
<th align="center" style="padding: 12px; background-color: #f1f1f1; font-size: 13px; font-weight: 700; color: #101010;">Qty</th>
<th align="right" style="padding: 12px; background-color: #f1f1f1; font-size: 13px; font-weight: 700; color: #101010;">Price</th>
</tr>
</thead>
<tbody>
${itemsHTML}
</tbody>
</table>
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f1f1; padding: 24px; margin-bottom: 24px;">
<tr>
<td style="font-size: 14px; color: #101010; padding-bottom: 8px;">Subtotal</td>
<td align="right" style="font-size: 14px; font-weight: 700; color: #101010; padding-bottom: 8px;">$${subtotal.toLocaleString()}</td>
</tr>
<tr>
<td style="font-size: 14px; color: #101010; padding-bottom: 8px;">Shipping</td>
<td align="right" style="font-size: 14px; font-weight: 700; color: #101010; padding-bottom: 8px;">$${shipping}</td>
</tr>
<tr>
<td style="font-size: 14px; color: #101010; padding-bottom: 12px;">VAT (20%)</td>
<td align="right" style="font-size: 14px; font-weight: 700; color: #101010; padding-bottom: 12px;">$${vat.toLocaleString()}</td>
</tr>
<tr>
<td style="font-size: 16px; font-weight: 700; color: #101010;">Grand Total</td>
<td align="right" style="font-size: 16px; font-weight: 700; color: #101010;">$${grandTotal.toLocaleString()}</td>
</tr>
</table>
<h3 style="margin: 0 0 12px; font-size: 16px; font-weight: 700; color: #101010;">Shipping details</h3>
<p style="font-size: 15px; line-height: 25px; margin: 0 0 32px; color: #101010;">${fullAddress}</p>
<table width="100%" cellpadding="0" cellspacing="0" border="0">
<tr>
<td align="center" style="padding: 32px 0;">
<a href="${orderURL}" style="background-color: #d87d4a; color: #ffffff; font-size: 13px; font-weight: 700; padding: 12px 24px; text-transform: uppercase; text-decoration: none; border-radius: 4px; display: inline-block;">VIEW YOUR ORDER</a>
</td>
</tr>
</table>
<p style="font-size: 15px; line-height: 25px; margin: 24px 0 0; color: #101010;">If you have any questions, simply reply to this email or reach out to us at <a href="mailto:support@audiophile.com" style="color: #d87d4a; text-decoration: none;">support@audiophile.com</a>.</p>
</td>
</tr>
<tr>
<td style="font-size: 12px; color: #6b6b6b; text-align: center; padding: 24px;">© 2025 Audiophile. All rights reserved.</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Audiophile <onboarding@resend.dev>",
      to: [customerEmail],
      subject: `Order Confirmation - ${orderNumber}`,
      html: emailHTML,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: (error as Error).message || "Failed to send email",
    };
  }
}
