import * as React from "react"
 
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel"

  import { Button } from "@/components/ui/button"

  
  
  export default function Works() {
    return (<>

    <div>
      <h1 className="text-3xl">WORKS</h1>
    <Carousel
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent>
      
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="items-center justify-center p-6">
                  <Button className="bg-black text-white rounded-none">
                  <p ><a href="https://carlaschwering.com/">Carlas Portfolio</a></p>
                  </Button>
                          <p className="mt-3 text-xl">Made with React, interactive with p5.js and more frameworks</p>
      </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="items-center justify-center p-6">
                  <Button className="bg-black text-white rounded-none">                          
                    <p><a href="https://admaguasanpedro.com/">ADM Aguas Pozohuacan</a></p>
                  </Button>
                          <p className="mt-3 text-xl">Made with React, interactive with p5.js and more frameworks</p>

      </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="items-center justify-center p-6">
                  <Button className="bg-black text-white rounded-none">
                  <p><a href="https://github.com/aspzs">Github</a></p>
                  </Button>
                          <p className="mt-3 text-xl">Repositories of my projects + creativecoding</p>
      </CardContent>
              </Card>
            </div>
          </CarouselItem>
                </CarouselContent>
    </Carousel>

<div className="xl:ml-80 xl:mt-9">
<Image src="/images/works.gif"       width={500}
      height={500}
      
      alt="Carla's Portfolio"
      ></Image>  


</div>






      </div>
  
  
    
    </>
  
    );
  }
  