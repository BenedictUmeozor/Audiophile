import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    // Customer details
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    // Shipping address
    shippingAddress: v.string(),
    shippingCity: v.string(),
    shippingZipCode: v.string(),
    shippingCountry: v.string(),

    // Payment information
    paymentMethod: v.union(
      v.literal("e-Money"),
      v.literal("Cash on Delivery"),
    ),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPin: v.optional(v.string()),

    // Order items
    items: v.array(
      v.object({
        productId: v.number(),
        productName: v.string(),
        productSlug: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      }),
    ),

    // Order totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
  },

  handler: async (ctx, args) => {
    // Generate unique order number
    const orderNumber = "ORD-" + Date.now();

    // Insert order with pending status
    const orderId = await ctx.db.insert("orders", {
      ...args,
      orderNumber,
      orderStatus: "pending",
    });

    // Fetch and return complete order object
    const order = await ctx.db.get(orderId);
    return order;
  },
});

export const getOrderById = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    return order;
  },
});
