// Import necessary libraries
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Input, Paper } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

// Your visual search component
const VisualSearch = () => {
  // State to manage dialog open/close
  const [open, setOpen] = useState(false);

  // Function to handle opening the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle image upload and API call
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    // Perform API call with the image file
    // You can replace the console.log with your API call logic
    console.log('API call with image:', file);
    // Close the dialog after handling the image
    handleClose();
  };

  return (
    <div>
      {/* Button to trigger visual search */}
      <IconButton onClick={handleOpen} color="primary" component="span">
        <PhotoCameraIcon />
      </IconButton>

      {/* Dialog for image upload */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Visual Search</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please upload an image for visual search.
          </DialogContentText>
          <Paper elevation={3} style={{ padding: '10px' }}>
            {/* Input for image upload */}
            <Input type="file" onChange={handleImageUpload} />
          </Paper>
        </DialogContent>
        <DialogActions>
          {/* Button to close the dialog */}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VisualSearch;
