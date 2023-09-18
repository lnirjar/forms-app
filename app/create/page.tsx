import { PlusCircle, Import, Heading, ImagePlus, SplitSquareVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import CreateFormToolbar from "@/components/CreateFormToolbar";

export default function CreateFormPage() {
    return (
        <div className="bg-slate-100 min-h-screen">
            <h1 className="text-4xl text-center">create form page</h1>
            <CreateFormToolbar />

        </div>
    )
}
