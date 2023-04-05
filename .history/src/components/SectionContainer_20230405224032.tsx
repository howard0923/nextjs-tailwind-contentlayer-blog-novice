type Props = {
  children: React.ReactNode;
};

export default function SectionContainer({ children }: Props) {
  return (
    <div className="mx-auto max-w-full  sm:px-6 md:max-w-3xl lg:max-w-5xl">
      {children}
    </div>
  );
}
