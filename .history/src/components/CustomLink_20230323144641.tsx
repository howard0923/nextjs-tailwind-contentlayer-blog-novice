import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'>;
//ComponentPropsWithoutRef 用於表示元素的原生html屬性，例如 <a> 元素的 href、target、onClick 等屬性。可以簡化元素屬性的定義，因為它可以自動推斷屬性的類型，並減少重複的定義。
//取得 <a> 元素的屬性類型，並將它指定為 Props 類型。這樣一來，Props 類型就可以用於定義接收 <a> 元素屬性的 React 元件。
const CustomLink = ({ href, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#'); //錨點鏈結（Anchor Link）是指在網頁中，點擊某一個連結後會跳轉到同一個頁面的某一部分。

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};
//target="_blank" 屬性是 HTML 中 <a> 元素的一個屬性，用於在新的瀏覽器窗口或標籤頁中打開連結。
//rel 屬性用於定義與連結的關係，其中 noopener 和 noreferrer 兩個值可以用於防止新窗口訪問原始頁面
export default CustomLink;
