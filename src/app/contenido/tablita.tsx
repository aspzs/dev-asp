import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

  import "./style.css"
import Image from "next/image";

  
  
  export default function Tablita() {
    return (<>
    <div className="tablita  grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
    <Table className="lista">
  <TableHeader>
    <TableRow>
      <TableHead className="text-3xl border-solid border-2 border-black" >languages</TableHead>
      <TableHead className="text-3xl border-solid border-2 border-black">devtools</TableHead>
      <TableHead className="text-3xl border-solid border-2 border-black">designtools</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="text-xl border-solid border-2 border-black">HTML</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Bootstrap</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Figma</TableCell>
    </TableRow>
    <TableRow>
    <TableCell className="text-xl border-solid border-2 border-black">CSS, Tailwind</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">GitHub</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Canva</TableCell>
    </TableRow>
    <TableRow>
    <TableCell className="text-xl border-solid border-2 border-black">JavaScript</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Netlify</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">p5.js</TableCell>
    </TableRow>
    <TableRow>
    <TableCell className="text-xl border-solid border-2 border-black">React.js Next.js</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Tailwind CSS</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Adobe Suite</TableCell>

    </TableRow>
    <TableRow>
    <TableCell className="text-xl border-solid border-2 border-black">p5.js</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">VS Code</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black"></TableCell>

    </TableRow>
    <TableRow>
    <TableCell className="text-xl border-solid border-2 border-black">OpenFrameworks</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">XCode</TableCell>
            <TableCell className="text-xl border-solid border-2 border-black"></TableCell>

    </TableRow>
    <TableRow>
    <TableCell className="text-xl border-solid border-2 border-black" ></TableCell>
      <TableCell className="text-xl border-solid border-2 border-black">Shopify</TableCell>
      <TableCell className="text-xl border-solid border-2 border-black"></TableCell>
    </TableRow>
  </TableBody>
</Table>

<Table className="w-8 ml-9 fotito	">
  <div>
    <Image src="/images/atlante.png"       width={500}
      height={500}
      alt="logo"
      ></Image>
      <p className="text-xl">
        2024 ASP ©

      </p>
  </div>
</Table>




      </div>
  
  
    
    </>
  
    );
  }
  