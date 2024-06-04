"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { setSize, setStripeApi } from "@/redux/slice";

type Props = {
  sizes: {
    name: string;
    stripeApi: string;
  }[];
};

const ProductSize = ({ sizes }: Props) => {
  const dispatch = useDispatch();

  const handleSetSize = (value: string) => {
    dispatch(setSize(value.split("-")[0]));
    dispatch(setStripeApi(value.split("-")[1]));
  };

  return (
    <Select onValueChange={handleSetSize}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="No selected" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>No selected</SelectLabel>
          {sizes.map((size, index: number) => (
            <SelectItem key={index} value={`${size.name}-${size.stripeApi}`}>
              {size.name.toUpperCase()}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductSize;
