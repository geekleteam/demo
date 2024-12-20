
import GraphViewNoSSR from "@/components/GraphViewNoSSR";
import Welcome from "@/markdown/welcome.mdx";
import { CheckCheck, ChevronDown, ChevronRight, FileSearch, MessageSquareCode, Network } from "lucide-react";






const BlockFooter = () => {
  return (
    <div className="mt-2 mb-8">
    <div className="flex gap-4 mt-2 mb-3">
      <div className="my-auto"> <CheckCheck className="text-gray-300" size={14}/> </div>
      <div className="my-auto"> <span className="text-sm text-gray-300">Modified at 17:20, 17 Oct 2024</span> </div>
    </div>
    <hr />
  </div>
  );
};

const Block = () => {
  return (
    <div>
      <Welcome />
      <BlockFooter />
    </div>
  );
};

export default function Cn() {
  return (
    <div className="w-full h-full flex flex-col min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <div className="w-full px-8 bg-white border-b-2"> 
        <div className="flex justify-between py-2">

          <h1 className="my-auto">GEEKLY AI</h1>

          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
        </div>          
        </div>
        
      </div>
      <div className="flex">

        <div className="w-14 pt-6 bg-background border-r-2">
          <div className="flex flex-col gap-9 text-gray-700	">
            <FileSearch className="mx-auto"/>
            <Network className="mx-auto" />
            <MessageSquareCode className="mx-auto" />
          </div>
        </div>

        <div className="flex w-full ">
          <nav className="bg-background flex flex-col gap-3 w-2/12 px-3 py-5">

            <div className="flex gap-2 ">
              <ChevronRight className="text-gray-700" />
              <h2 className="text-lg">Feature number 1</h2>
            </div>


            <div className="flex gap-2">
              <ChevronRight className="text-gray-700" />
              <h2 className="text-lg">Feature number 2</h2>
            </div>   

            <div className="flex gap-2">
              <ChevronRight className="text-gray-700" />
              <h2 className="text-lg">Feature number 3</h2>
            </div>      

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <ChevronDown className="text-gray-700" />
                <h2 className="text-lg">Feature number 4</h2>
              </div>
              <div className=" flex flex-col  ml-4  ">

                <div className="border-l-2 pl-4 py-1">
                  <h3>Article 1ed</h3>
                </div>

                <div className="border-l-2 pl-4 py-1 border-s-pink-400">
                  <h3 className="text-pink-400">Article 2ed</h3>
                </div>

                <div className="border-l-2 pl-4 py-1">
                  <h3>Article 3ed</h3>
                </div>                                
              </div>
            </div>  


          </nav>

          <main className="bg-foreground border-l-2 w-6/12 px-6 py-5 md">
            <Block />
            <Block />
            <Block />         
            <Block />  
            <Block />                             
          </main>

          <section className="w-6/12">
            {/* <GraphViewNoSSR /> */}
          </section>
        </div>
      </div>
    </div>
  );
}
