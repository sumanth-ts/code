<StyledDiv>
            {/* Badge with ToggleButton */}
            <Badge color="primary" badgeContent={<ToggleButton size="small">Toggle</ToggleButton>}>
                {/* TextField */}
                <TextField label="Your Text" variant="outlined" />
            </Badge>

            {/* Some names with background color */}
            <div style={{ marginTop: '20px' }}>
                <div style={{ background: 'linear-gradient(to right, #66ff66, #6699ff)', padding: '10px', display: 'inline-block', margin: '5px' }}>Name 1</div>
                <div style={{ background: 'linear-gradient(to right, #ff99cc, #cc99ff)', padding: '10px', display: 'inline-block', margin: '5px' }}>Name 2</div>
                <div style={{ background: 'linear-gradient(to right, #99ffcc, #ffcc99)', padding: '10px', display: 'inline-block', margin: '5px' }}>Name 3</div>
            </div>

            {/* Search button with linear gradient background */}
            <Button variant="contained" style={{ background: 'linear-gradient(to right, #ff6666, #ffcc00)', marginTop: '20px' }}>
                Search
            </Button>
        </StyledDiv>
