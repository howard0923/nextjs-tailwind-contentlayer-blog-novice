import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Header />
        <CustomImage
          src="og-image.png"
          alt="og-image"
          className="h-auto max-w-full"
        />

        <SectionContainer>
          <main className="mb-auto">{children}</main>
        </SectionContainer>
      </div>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
