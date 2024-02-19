import { Button } from "@/components/ui/Button";
import { Loader2 as Spinner } from "lucide-react";

export function LoadingWalletButton() {
  return (
    <Button variant="default" disabled>
      <Spinner className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  );
}
