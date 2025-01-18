import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Calculator, BookOpen, ShieldCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Crypto Tax Report",
      description: "Comprehensive reporting of your cryptocurrency transactions, including capital gains, mining income, and DeFi activities.",
      icon: FileText
    },
    {
      title: "Crypto Tax Review",
      description: "Expert review of your crypto tax documentation to ensure accuracy and compliance with current regulations.",
      icon: ShieldCheck
    },
    {
      title: "Tax Return",
      description: "Professional preparation and filing of your tax returns, incorporating all your crypto and traditional investments.",
      icon: Calculator
    },
    {
      title: "Tax Advisory Services",
      description: "Strategic tax planning and consultation to optimize your crypto investment decisions and minimize tax liability.",
      icon: BookOpen
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
          Our Services
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          CryptoTaxPro is a full-service tax firm specialising in cryptocurrency taxation. 
          Our team of expert accountants and crypto specialists provides personalised support 
          to make filing crypto taxes straightforward and hassle-free.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/10 transition-all duration-300" />
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
              <CardDescription className="text-gray-600">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;