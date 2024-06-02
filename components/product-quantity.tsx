import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProductQuantity = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="No selected" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>No selected</SelectLabel>
          {Array.from({ length: 10 }).map((_, index) => (
            <SelectItem value={String(index + 1)}>{index + 1}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductQuantity;
