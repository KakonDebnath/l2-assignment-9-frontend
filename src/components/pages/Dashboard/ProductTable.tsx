import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TProduct } from '@/type';
import Image from 'next/image';
const ProductTable = ({ productsData }: { productsData: TProduct[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Sl</TableHead>
          <TableHead className="text-center">Image</TableHead>
          <TableHead className="text-center">Service Name</TableHead>
          <TableHead className="text-center">Service Description</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productsData?.map((product, i) => (
          <TableRow key={product?._id}>
            <TableCell className="font-medium">{i + 1}</TableCell>
            <TableCell className="font-medium w-20 h-12">
              <Image
                className="rounded-md w-20 h-12"
                src={product?.images}
                alt={product?.name}
                width={80}
                height={48}
              />
            </TableCell>
            <TableCell>{product?.name}</TableCell>
            <TableCell>
              {product?.description.length > 80
                ? product?.description.slice(0, 70) + '...'
                : product?.description}
            </TableCell>
            <TableCell>
              <div className="flex gap-3">
                <Button>Edit</Button>

                <Button>Delete</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total Item</TableCell>
          <TableCell className="text-right">{productsData?.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default ProductTable;
