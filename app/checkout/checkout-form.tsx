"use client";

import CashOnDeliveryIcon from "@/components/icons/cash-on-delivery-icon";
import Checkbox from "@/components/ui/checkbox";
import Input from "@/components/ui/input";
import { formSchema } from "@/lib/zod";
import { cn } from "@/utils";
import { Control, Controller, useWatch } from "react-hook-form";
import z from "zod";

const CheckoutForm = ({
  control,
}: {
  control: Control<z.infer<typeof formSchema>>;
}) => {
  const method = useWatch({ control, name: "method" });
  return (
    <div className="rounded-lg bg-white px-12 py-[54px] max-lg:px-7 max-lg:py-[30px] max-md:px-6 max-md:py-6">
      <h2 className="mb-8 text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-6 max-md:text-[28px] max-md:leading-[100%] max-md:tracking-[1px]">
        CHECKOUT
      </h2>
      <div className="mt-[41px] space-y-[53px]">
        <fieldset className="space-y-4">
          <legend className="text-primary text-[13px] leading-[25px] font-bold tracking-[0.93px]">
            BILLING DETAILS
          </legend>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-md:grid-cols-1">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px]">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="name"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      Name
                    </label>
                    {fieldState.error && (
                      <span
                        className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]"
                        id="name-error"
                        role="alert"
                      >
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    id="name"
                    error={!!fieldState.error}
                    placeholder="Alexei Ward"
                    aria-describedby={fieldState.error ? "name-error" : undefined}
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px]">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      Email Address
                    </label>
                    {fieldState.error && (
                      <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    type="email"
                    error={!!fieldState.error}
                    placeholder="alexei@mail.com"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px]">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="phone"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      Phone Number
                    </label>
                    {fieldState.error && (
                      <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    type="tel"
                    error={!!fieldState.error}
                    placeholder="+1 202-555-0136"
                  />
                </div>
              )}
            />
          </div>
        </fieldset>
        <fieldset className="space-y-4">
          <legend className="text-primary text-[13px] leading-[25px] font-bold tracking-[0.93px]">
            SHIPPING INFO
          </legend>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-md:grid-cols-1">
            <Controller
              control={control}
              name="address"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px] md:col-span-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="address"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      Address
                    </label>
                    {fieldState.error && (
                      <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    error={!!fieldState.error}
                    placeholder="1137 Williams Avenue"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="zipCode"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px]">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="zipCode"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      ZIP Code
                    </label>
                    {fieldState.error && (
                      <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    type="text"
                    error={!!fieldState.error}
                    placeholder="10001"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="city"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px]">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="city"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      City
                    </label>
                    {fieldState.error && (
                      <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    type="tel"
                    error={!!fieldState.error}
                    placeholder="New York"
                  />
                </div>
              )}
            />
            <Controller
              control={control}
              name="country"
              render={({ field, fieldState }) => (
                <div className="space-y-[9px]">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="country"
                      className={cn(
                        "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                        fieldState.error && "text-danger",
                      )}
                    >
                      Country
                    </label>
                    {fieldState.error && (
                      <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                  <Input
                    {...field}
                    type="tel"
                    error={!!fieldState.error}
                    placeholder="United States"
                  />
                </div>
              )}
            />
          </div>
        </fieldset>
        <fieldset className="space-y-4">
          <legend className="text-primary text-[13px] leading-[25px] font-bold tracking-[0.93px]">
            PAYMENT DETAILS
          </legend>
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-md:grid-cols-1">
            <Controller
              control={control}
              name="method"
              render={({ field, fieldState }) => (
                <div className="grid grid-cols-2 gap-x-4 gap-y-[17px] max-md:grid-cols-1 md:col-span-2">
                  <label
                    htmlFor="method"
                    className={cn(
                      "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                      fieldState.error && "text-danger",
                    )}
                    id="payment-method-label"
                  >
                    Payment Method
                  </label>
                  <div
                    className="space-y-4"
                    role="radiogroup"
                    aria-labelledby="payment-method-label"
                    aria-required="true"
                  >
                    <Checkbox
                      {...field}
                      checked={field.value === "e-Money"}
                      onChange={() => field.onChange("e-Money")}
                      text="e-Money"
                      error={!!fieldState.error}
                    />
                    <Checkbox
                      {...field}
                      checked={field.value === "Cash on Delivery"}
                      onChange={() => field.onChange("Cash on Delivery")}
                      text="Cash on Delivery"
                      error={!!fieldState.error}
                    />
                  </div>
                </div>
              )}
            />
            {method === "e-Money" && (
              <>
                <Controller
                  control={control}
                  name="eMoneyNumber"
                  render={({ field, fieldState }) => (
                    <div className="space-y-[9px]">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="eMoneyNumber"
                          className={cn(
                            "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                            fieldState.error && "text-danger",
                          )}
                        >
                          e-Money Number
                        </label>
                        {fieldState.error && (
                          <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                            {fieldState.error.message}
                          </span>
                        )}
                      </div>
                      <Input
                        {...field}
                        type="tel"
                        error={!!fieldState.error}
                        placeholder="238521993"
                      />
                    </div>
                  )}
                />
                <Controller
                  control={control}
                  name="eMoneyPin"
                  render={({ field, fieldState }) => (
                    <div className="space-y-[9px]">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="eMoneyPin"
                          className={cn(
                            "text-[12px] leading-[100%] font-bold tracking-[-0.21px]",
                            fieldState.error && "text-danger",
                          )}
                        >
                          e-Money PIN
                        </label>
                        {fieldState.error && (
                          <span className="text-danger text-right text-[12px] leading-[100%] tracking-[-0.21px]">
                            {fieldState.error.message}
                          </span>
                        )}
                      </div>
                      <Input
                        {...field}
                        type="tel"
                        error={!!fieldState.error}
                        placeholder="6891"
                      />
                    </div>
                  )}
                />
              </>
            )}
            {method === "Cash on Delivery" && (
              <div className="flex items-center gap-x-8 max-md:gap-x-4 md:col-span-2">
                <CashOnDeliveryIcon />
                <p className="body flex-1 text-black/50">
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            )}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default CheckoutForm;
