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

type Props = {
  sizes: string[];
};

const ProductSize = ({ sizes }: Props) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="No selected" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>No selected</SelectLabel>
          {sizes.map((size) => (
            <SelectItem value={size}>{size.toUpperCase()}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ProductSize;
