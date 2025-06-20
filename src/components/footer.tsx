import { Box, Container, Flex, HStack, Icon, Link, Stack } from "@chakra-ui/react";
import { FC } from "react";
import { Icons } from "./icons";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Copyright } from "./copyright";

const Footer : FC = () => {
    const socialLinks = [
        { href: 'https://x.com', icon: <SiX /> },
        { href: 'https://github.com', icon: <SiGithub /> },
        { href: 'https://www.linkedin.com', icon: <SiLinkedin /> },
    ]

    return (
        <Container as="footer" py={{ base: '10', md: '12' }}>
            <Stack gap="6">
            <Stack direction="row" justify="space-between" align="center">
                <Icons.gitHub height="32" />
                <HStack gap="4">
                {socialLinks.map(({ href, icon }, index) => (
                    <Link key={index} href={href} colorPalette="gray">
                    <Icon size="md">{icon}</Icon>
                    </Link>
                ))}
                </HStack>
            </Stack>
            <Copyright />
            </Stack>
        </Container>
    );
}

export default Footer;