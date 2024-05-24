import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TrausersTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Size</TableHead>
          <TableHead>Waist (in)</TableHead>
          <TableHead>Hip (in)</TableHead>
          <TableHead>Inseam (in)</TableHead>
          <TableHead>Thigh (in)</TableHead>
          <TableHead className="text-right">Calf (in)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">XS</TableCell>
          <TableCell>28</TableCell>
          <TableCell>36</TableCell>
          <TableCell>30</TableCell>
          <TableCell>20</TableCell>
          <TableCell className="text-right">14</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">S</TableCell>
          <TableCell>30</TableCell>
          <TableCell>38</TableCell>
          <TableCell>30</TableCell>
          <TableCell>22</TableCell>
          <TableCell className="text-right">16</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">M</TableCell>
          <TableCell>32</TableCell>
          <TableCell>40</TableCell>
          <TableCell>32</TableCell>
          <TableCell>24</TableCell>
          <TableCell className="text-right">18</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">L</TableCell>
          <TableCell>34</TableCell>
          <TableCell>42</TableCell>
          <TableCell>32</TableCell>
          <TableCell>26</TableCell>
          <TableCell className="text-right">20</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">XL</TableCell>
          <TableCell>36</TableCell>
          <TableCell>44</TableCell>
          <TableCell>34</TableCell>
          <TableCell>28</TableCell>
          <TableCell className="text-right">22</TableCell>
        </TableRow>
      </TableBody>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">XXL</TableCell>
          <TableCell>38</TableCell>
          <TableCell>46</TableCell>
          <TableCell>34</TableCell>
          <TableCell>30</TableCell>
          <TableCell className="text-right">24</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TrausersTable;
