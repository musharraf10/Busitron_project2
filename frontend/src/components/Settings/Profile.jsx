import React from 'react'
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export default function Profile() {

    const [isEditing, setIsEditing] = React.useState(false);

    const [profileData, setProfileData] = React.useState({
        firstName: "John",
        lastName: "Doe",
        role: "UI Developer",
        email: "johndoe@example.com",
        timezone: "1",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286",
      });

    const handleInputChange = (e) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
      };
    
      const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
          setProfileData({
            ...profileData,
            image: URL.createObjectURL(e.target.files[0]),
          });
        }
      };
    
      const handleEdit = () => setIsEditing(true);
      const handleSave = () => setIsEditing(false);
    
  return (
    <>
        <Box sx={{ flex: 1, width: "100%", maxWidth: "800px", mx: "auto", p: 3 }}>
            <Card>
            <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Personal info</Typography>
                <Typography level="body-sm">
                Customize how your profile information will appear.
                </Typography>
            </Box>
            <Divider />
            <Stack direction="row" spacing={3} sx={{ my: 2 }}>
                <Stack direction="column" spacing={1} sx={{ position: "relative" }}>
                <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                >
                    <img src={profileData.image} alt="Profile" loading="lazy" />
                </AspectRatio>
                {isEditing && (
                    <input
                    type="file"
                    accept="image/*"
                    style={{
                        position: "absolute",
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                    }}
                    onChange={handleImageChange}
                    />
                )}
                </Stack>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                    sx={{ display: "flex", flexDirection: "row", gap: 2 }}
                    >
                    <Input
                        size="sm"
                        placeholder="First name"
                        name="firstName"
                        value={profileData.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                    />
                    <Input
                        size="sm"
                        placeholder="Last name"
                        name="lastName"
                        value={profileData.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                    />
                    </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input
                        size="sm"
                        name="role"
                        value={profileData.role}
                        disabled
                    />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        size="sm"
                        type="email"
                        name="email"
                        startDecorator={<EmailRoundedIcon />}
                        value={profileData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                    />
                    </FormControl>
                </Stack>
                <div>
                    <FormControl>
                    <FormLabel>Timezone</FormLabel>
                    <Select
                        size="sm"
                        startDecorator={<AccessTimeFilledRoundedIcon />}
                        name="timezone"
                        value={profileData.timezone}
                        onChange={(e, newValue) =>
                        setProfileData({ ...profileData, timezone: newValue })
                        }
                        disabled={!isEditing}
                    >
                        <Option value="1">GMT+07:00 - Indochina Time</Option>
                        <Option value="2">GMT+05:30 - India Standard Time</Option>
                    </Select>
                    </FormControl>
                </div>
                </Stack>
            </Stack>
            <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
                <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                {isEditing ? (
                    <>
                    <Button
                        size="sm"
                        variant="outlined"
                        color="neutral"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                        Save
                    </Button>
                    </>
                ) : (
                    <Button
                    size="sm"
                    onClick={handleEdit}
                    startDecorator={<EditRoundedIcon />}
                    >
                    Edit
                    </Button>
                )}
                </CardActions>
            </CardOverflow>
            </Card>
        </Box>
    </>
  )
}
