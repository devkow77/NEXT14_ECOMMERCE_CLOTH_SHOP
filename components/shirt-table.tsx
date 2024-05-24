import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ShirtTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Size</TableHead>
          <TableHead>Chest/Bust (in)</TableHead>
          <TableHead>Length (in)</TableHead>
          <TableHead>Shoulder (in)</TableHead>
          <TableHead className="text-right">Sleeve (in)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">XS</TableCell>
          <TableCell>32</TableCell>
          <TableCell>24</TableCell>
          <TableCell>14</TableCell>
          <TableCell className="text-right">6</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">S</TableCell>
          <TableCell>36</TableCell>
          <TableCell>26</TableCell>
          <TableCell>16</TableCell>
          <TableCell className="text-right">7</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">M</TableCell>
          <TableCell>40</TableCell>
          <TableCell>28</TableCell>
          <TableCell>18</TableCell>
          <TableCell className="text-right">8</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">L</TableCell>
          <TableCell>44</TableCell>
          <TableCell>30</TableCell>
          <TableCell>20</TableCell>
          <TableCell className="text-right">9</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">XL</TableCell>
          <TableCell>48</TableCell>
          <TableCell>32</TableCell>
          <TableCell>22</TableCell>
          <TableCell className="text-right">10</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">XXL</TableCell>
          <TableCell>52</TableCell>
          <TableCell>34</TableCell>
          <TableCell>24</TableCell>
          <TableCell className="text-right">11</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ShirtTable;
