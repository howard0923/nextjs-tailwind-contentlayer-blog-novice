import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'>;
//ComponentPropsWithoutRef 用於表示元素的原生html屬性，例如 <a> 元素的 href、target、onClick 等屬性。可以簡化元素屬性的定義，因為它可以自動推斷屬性的類型，並減少重複的定義。
//取得 <a> 元素的屬性類型，並將它指定為 Props 類型。這樣一來，Props 類型就可以用於定義接收 <a> 元素屬性的 React 元件。
const CustomLink = ({ href, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;