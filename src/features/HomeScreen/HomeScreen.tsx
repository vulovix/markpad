import { Button, Flex, Grid, Group, List, Text } from "@mantine/core";
import { TbArrowDownToArc } from "react-icons/tb";
import { VscFile, VscFolder, VscFolderActive, VscFolderOpened } from "react-icons/vsc";

export default function HomeScreen() {
  return (
    <Flex align={"center"} justify={"center"} mih={"100dvh"}>
      <Grid align="center">
        <Grid.Col span={6}>
          <Grid.Col span={12}>
            <Text fz={"h2"}>Welcome to</Text>
            <Group gap={0}>
              <Text c="cyan" ta="left" fw={500} fz="h1" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <TbArrowDownToArc style={{ position: "relative", top: 2 }} /> MarkPad
              </Text>
              <Text ta="left" fw={500} fz="h1"></Text>
            </Group>
          </Grid.Col>
          <Grid gutter={"md"}>
            <Grid.Col>
              <Button w="100%" variant="gradient" style={{ boxShadow: "none", border: "none" }}>
                Select Markdown
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button w="100%" variant="light" style={{ boxShadow: "none", border: "none" }}>
                <VscFile size={18} />
                &nbsp; Select File
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Button w="100%" variant="light" style={{ boxShadow: "none", border: "none" }}>
                <VscFolderOpened size={18} />
                &nbsp; Select Folder
              </Button>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text tt="uppercase" c="dimmed" mb={"xs"}>
            Recent Files
          </Text>
          <List listStyleType="none" spacing="xs">
            {[1, 2, 3, 4, 5].map((x) => (
              <List.Item>
                <Group gap={"xs"}>
                  <Text c="cyan" style={{ textWrap: "nowrap" }}>
                    README_{x}.en-US
                  </Text>
                  <Text c="dimmed" style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    /Users/ivan/Desktop/README_{1}.en-US.md
                  </Text>
                </Group>
              </List.Item>
            ))}
          </List>
          <Text tt="uppercase" c="dimmed" mt="sm" mb={"xs"}>
            Recent Folders
          </Text>
          <List listStyleType="none" spacing="xs">
            {[1, 2, 3, 4, 5].map((x) => (
              <List.Item>
                <Group gap={"xs"}>
                  <Text c="cyan" style={{ textWrap: "nowrap" }}>
                    README_{x}.en-US
                  </Text>
                  <Text c="dimmed" style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    /Users/ivan/Desktop/README_{1}.en-US.md
                  </Text>
                </Group>
              </List.Item>
            ))}
          </List>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}
