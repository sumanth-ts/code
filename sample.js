<Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Your attached div */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: '5px',
          backgroundColor: '#ffcc00', // Set your preferred color
        }}
      >
        Your Div
      </div>

      {/* The TextField */}
      <TextField label="Your Text Field" variant="outlined" />
    </Box>
