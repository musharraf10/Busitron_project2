import React from 'react'
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";


export default function ChangePassword() {

    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    const handleSavePassword = () => {
        if (newPassword !== confirmPassword) {
          setPasswordError("Passwords does not match !!!!!!!");
        } else {
          setPasswordError("");
          console.log("Password updated successfully!");
        }
      };
  return (
    <>
        <Card>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Privacy & Security</Typography>
              <Typography level="body-sm">
                Update your password to keep your account secure.
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={2} sx={{ mt: 2 }}>
              <FormControl>
                <FormLabel>Current Password</FormLabel>
                <Input size="sm" type="password" placeholder="Enter current password" />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  size="sm"
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  size="sm"
                  type="password"
                  placeholder="Enter confirm passowrd"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
              {passwordError && <Typography color="error">{passwordError}</Typography>}
            </Stack>
            <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSavePassword}>
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
    </>
  )
}
