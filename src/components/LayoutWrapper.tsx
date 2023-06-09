import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionContainer from '@/components/SectionContainer';
import CustomImage from '@/components/CustomImage';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Header />
        {/* <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[70vh]">
          <CustomImage
            src="/og-image.png"
            alt="og-image"
            className="w-full h-full object-cover"
          />
        </div> */}

        <SectionContainer>
          <main className="mb-auto">{children}</main>
        </SectionContainer>
      </div>

      <Footer />
    </div>
  );
};

export default LayoutWrapper;
