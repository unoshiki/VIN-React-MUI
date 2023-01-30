import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function DataInputContent() {
  const [vin, setVin] = useState("");

  const onClickVin = () => {
    console.log(vin);
    if (vin === "") {
      toast.error("Input VIN.", {
        duration: 4000,
        position: "top-center",
      });
      console.log("input vin");
      return;
    }
    window.location.href = "/result";
  };

  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9} style={{ margin: "auto" }}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="vin"
                label="Input VIN"
                name="vin"
                onChange={(e) => setVin(e.target.value)}
                value={vin}
                autoComplete="VIN"
                autoFocus
              />

              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => onClickVin()}
              >
                S u b m i t
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Toaster />
    </div>
  );
}

export default function DataInput() {
  return <DataInputContent />;
}
