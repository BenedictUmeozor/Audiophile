import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
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

    // Order items (denormalized product data)
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

    // Order status and reference
    orderNumber: v.string(),
    orderStatus: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("shipped"),
      v.literal("delivered"),
    ),
  }),
});
