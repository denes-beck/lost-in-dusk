import { ContactButton } from "@/components";
import { useTypewriter } from "@/hooks";
import { Stack } from "@chakra-ui/react";

interface HomeProps {
  contactAction: () => void;
}
const Home = ({ contactAction }: HomeProps) => {
  const output = useTypewriter(
    // The first two spaces are required to prevent the second character from being omitted.
    "  Hello, my name is Denes.|🚀 I'm a DevOps Engineer.",
  );

  return (
    // The height of the div is calculated by subtracting the height of the Navbar, Footer, and the two 5rem paddings from the viewport height.
    <Stack className="h-[calc(100vh-170px)] min-h-screen w-full items-center justify-center px-4">
      <div className="text-2xl text-center min-h-8">{output.split("|")[0]}</div>
      <div className="text-base text-center min-h-6">
        {output.split("|")[1]}
      </div>
      <ContactButton label={"Contact me"} action={contactAction} />
    </Stack>
  );
};

export default Home;
