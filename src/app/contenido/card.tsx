import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
  import { Button } from "@/components/ui/button"

  import "./style.css"

  
  export default function Carta() {
    return (<>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <Card className="cartas">
        <CardHeader>
          <CardTitle>design</CardTitle>
          <CardDescription className="text-white text-2xl">I appreciate simple content structure, clean design patterns, and thoughtful interactions.</CardDescription>
        </CardHeader>
      </Card>


        <Card className="cartas">
        <CardHeader>
          <CardTitle>webdesign</CardTitle>
          <CardDescription className="text-white text-2xl">I like to code things from scratch, and enjoy bringing (your) ideas to be online.</CardDescription>
        </CardHeader>
      </Card>

      <Card className="cartas justify-center">
        <CardHeader className="justify-center">
          <CardDescription><Drawer>
        <Button className="bg-white text-black rounded-none">
        <DrawerTrigger>Want to collaborate?</DrawerTrigger>
        </Button>
  <DrawerContent className="bg-gray-300">
    <DrawerHeader>
      <DrawerTitle className="xl:text-4xl sm:text-3xl">Contact me</DrawerTitle>
      <DrawerDescription className="xl:text-6xl sm:text-3xl">E mail : <a href="mailto:info@arnolsegovia.com">info@arnolsegovia.com</a></DrawerDescription>
      <DrawerDescription className="xl:text-4xl sm:text-3xl">Available in Español, English and Deutsch</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer></CardDescription>
        </CardHeader>

        







      </Card>

      </div>
  
  
    
    </>
  
    );
  }
  