import React from 'react';
import Button from '@material-ui/core/Button';
import AlertDialog from '../AlertDialog/AlertDialog';
import Messages from "../../assets/Local/messages";

export default function DeactivateAccount() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
      console.log('done')
    // Todo -> call API
    // Todo -> redirect to home page
  };

  return (
    <div className=''>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Deactivate Account
      </Button>
      <AlertDialog
      open={open}
      content={Messages.en.Profile.DeactivateAccountAlertMsg}
      handleClose={handleClose}
      handleConfirm={handleConfirm}
      />
    </div>
  );
}
