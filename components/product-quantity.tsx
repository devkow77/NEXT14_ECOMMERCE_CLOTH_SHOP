"use client";

import { useState, ChangeEvent } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setQuantity } from "@/redux/slice";
import { useSelector, useDispatch } from "react-redux";

const ProductQuantity = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: any) => state.product.quantity);

  const handleQuantityChange = (value: string) => {
    dispatch(setQuantity(Number(value)));
  };

  return (
    <Select onValueChange={handleQuantityChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="No selected" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>No selected</SelectLabel>
          {Array.from({ length: 10 }).map((_, index) => (
            <SelectItem value={String(index + 1)} key={index}>
              {index + 1}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductQuantity;
