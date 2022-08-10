import { Button, Menu, MenuItem } from "@material-ui/core";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";

const ChunkTwo = () => {
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  return (
    <>
      <div>
        <Button variant="contained" {...bindTrigger(popupState)}>
          Open Menu
        </Button>
        <Menu {...bindMenu(popupState)}>
          <MenuItem onClick={popupState.close}>Cake</MenuItem>
          <MenuItem onClick={popupState.close}>Death</MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default ChunkTwo;
