import { PlusCircle, Import, Heading, ImagePlus, SplitSquareVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { PopperContentProps } from "@radix-ui/react-tooltip";

const toolbarItems = [
    {
        Icon: PlusCircle,
        tooltipText: "Add question"
    },
    {
        Icon: Import,
        tooltipText: "Import questions"
    },
    {
        Icon: Heading,
        tooltipText: "Add title and description"
    },
    {
        Icon: ImagePlus,
        tooltipText: "Add image"
    },
    {
        Icon: SplitSquareVertical,
        tooltipText: "Add section"
    },
];

type Props = {
    side?: PopperContentProps["side"]
};

export default function CreateFormToolbar({
    side = "top"
}: Props) {
    return (
        <div className="p-2 bg-white w-fit rounded-lg fixed bottom-4 left-1/2 -translate-x-1/2 shadow-lg flex gap-2">
            {
                toolbarItems.map(({ Icon, tooltipText }, i) => (
                    <TooltipProvider key={i}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Icon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side={side} sideOffset={12}>
                                <p>{tooltipText}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))
            }

        </div>
    )
}
