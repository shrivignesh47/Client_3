import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { MapPin } from "lucide-react";
import ShinyText from "../components/ShinyText/ShinyText";

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121415] px-4 py-10">
      <Card className="w-full max-w-3xl rounded-2xl bg-[#1A1D1F] shadow-xl border border-[#2A2E30]">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 fabril-fatface">
            <MapPin className="w-6 h-6 text-[#D2A260]" />
            <ShinyText text="Our Location" disabled={false} speed={3} className="custom-class fabril-fatface text-3xl" />
          </div>
          <p className="text-[#BFBAB4] mt-2">
          <ShinyText text="  Visit us at our premium restaurant in Ooty." disabled={false} speed={3} className='custom-class' />
          </p>
          <div className="mt-4 rounded-lg overflow-hidden border border-[#2A2E30] shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.2474963804098!2d76.70129387452492!3d11.407850947230887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd8eb9a1bc6d%3A0xed530d84dfa4738!2sTaj%20Multicuisine%20Restaurant%20Ooty!5e1!3m2!1sen!2sin!4v1739099214502!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
