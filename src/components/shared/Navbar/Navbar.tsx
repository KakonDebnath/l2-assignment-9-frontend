import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from '../Container/Container';

const Navbar = () => {
  return (
    <div className="py-4 flex justify-between items-center">
      <Link href="/">
        <h2 className="text-3xl font-semibold">
          Kabbo <span className="text-orange-500">Baby</span> Shop
        </h2>
      </Link>
      <div>
        <Link href="/">
          <Button className="text-lg" variant="ghost">
            Home
          </Button>
        </Link>
        <Link href="/products">
          <Button className="text-lg" variant="ghost">
            Products
          </Button>
        </Link>
        <Link href="/flash-sale">
          <Button className="text-lg" variant="ghost">
            Flash Sale
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="text-lg" variant="ghost">
            Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
