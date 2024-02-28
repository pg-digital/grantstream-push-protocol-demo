import { Button } from "@/components/ui/Button";
import { useIsServerSide } from "@/hooks";

export function StartChatButton() {
  const { isServerSide } = useIsServerSide();

  const onStartClick = () => {
    if (!isServerSide) {
      window.alert(
        // @TODO: Placeholder message, to be removed once feature is added.
        "This feature is in-progress, and we're working to release it soon!"
      );
    }
  };

  return (
    <Button variant="default" className="w-full" onClick={onStartClick}>
      Chat with team member
    </Button>
  );
}
