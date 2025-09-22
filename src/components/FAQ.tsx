import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I open an account?",
    answer: "Opening an account is simple and straightforward. You can start by clicking the 'Apply Now' button and filling out our secure online application. Our team will guide you through the entire process and help you get started with your real estate investment journey."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including wire transfers, ACH transfers, and certified checks. Our team will provide specific payment instructions once your loan is approved and ready for funding."
  },
  {
    question: "How can I monitor my investment?",
    answer: "You can monitor your investment through our secure online portal where you'll have access to real-time updates, payment schedules, and detailed reports on your loan performance."
  },
  {
    question: "How do I withdraw funds from my account?",
    answer: "Fund withdrawals can be processed through our secure portal or by contacting our customer service team. Processing times vary depending on the withdrawal method chosen."
  },
  {
    question: "Does Cityscape Finance provide information to registered users?",
    answer: "Yes, we provide comprehensive information including market updates, investment opportunities, educational resources, and regular communications to keep our clients informed about their investments and market trends."
  },
  {
    question: "When can I deposit or withdraw from my investment account?",
    answer: "Deposits and withdrawals are subject to the terms of your specific loan agreement. Generally, you can make deposits at any time, while withdrawals may have specific timing requirements based on your loan terms."
  },
  {
    question: "Are there any fees associated with investing in projects?",
    answer: "Our fee structure is transparent and competitive. All fees are clearly outlined in your loan documentation, including origination fees, processing fees, and any other applicable charges. We believe in no hidden fees."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our lending services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg shadow-soft border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-light py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* How It Works Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-foreground mb-4">How It Works</h3>
            <p className="text-center text-muted-foreground mb-12">How we make it happen</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">Choose Project</h4>
                <p className="text-muted-foreground">Select from our curated portfolio of investment opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">2</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">Make Deposit</h4>
                <p className="text-muted-foreground">Secure your investment with our streamlined funding process.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">Get Profit</h4>
                <p className="text-muted-foreground">Earn competitive returns on your real estate investments.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">4</span>
                </div>
                <h4 className="text-xl font-semibold text-primary mb-2">Withdraw Anytime</h4>
                <p className="text-muted-foreground">Flexible withdrawal options based on your investment terms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;