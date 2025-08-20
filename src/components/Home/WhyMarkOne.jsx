import { whyMarkOne } from "@/constants";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WhyMarkOne = () => {
  return (
    <section className="bg-white max-w-[1920px] flex flex-col relative justify-center mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-20 border-red-500 overflow-hidden">
      {/* Background - box effect */}
      {/* <BgBoxEffect /> */}

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-3">
        Why Mark One
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl leading-relaxed">
        Four pillars that define how we build and scale with our partners.
      </p>

      <div className="w-full grid gap-7 grid-cols-1 md:grid-cols-4 my-6">
        {whyMarkOne.map(({ id, img, title, desc }) => (
          <div key={title} className="">
            <Card key={id} className="w-full mt-0 pt-0">
              <div className="w-full h-48 overflow-hidden rounded-t-2xl mb-4">
                <img src={img} alt={title} className="w-full" />
              </div>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyMarkOne;
