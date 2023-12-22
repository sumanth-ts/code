<Box sx={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
      {/* Your attached div */}
      <div
        style={{
          position: 'absolute',
          top: '50%', // Adjust this value based on your design
          left: '4px', // Adjust this value based on your design
          transform: 'translateY(-50%)',
          padding: '5px',
          backgroundColor: '#ffcc00', // Set your preferred color
          border: '1px solid #ccc', // Add border for clarity
          borderRadius: '4px', // Add border radius for rounded corners
        }}
      >
        Your Div
      </div>

      {/* The TextField */}
      <TextField label="Your Text Field" variant="outlined" />
    </Box>
