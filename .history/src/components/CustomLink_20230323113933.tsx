import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type Props = LinkProps & {
  children: React.ReactNode;
  activeClassName?: string;
};

const CustomLink = ({
  href,
  children,
  activeClassName = '',
  ...rest
}: Props) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
    <Link href={href} {...rest}>
      {React.cloneElement(children, {
        className,
      })}
    </Link>
  );
};

export default CustomLink;
