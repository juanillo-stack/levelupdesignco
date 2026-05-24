import { Feather, Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown } from "react-native-reanimated";

import { useColors } from "@/hooks/useColors";

const WHATSAPP = "https://wa.me/34606899991";

const PROJECTS = [
  {
    id: "judith",
    title: "Judith Almansa",
    subtitle: "Organizadora de eventos",
    description:
      "Web para cestas personalizadas y decoración de eventos en Málaga.",
    link: "https://cestasyeventosjudith.vercel.app",
    tags: ["Eventos", "Málaga"],
  },
  {
    id: "levelup-interiores",
    title: "LevelUp Interiores",
    subtitle: "Empresa de reformas",
    description:
      "Reformas de cocinas, baños y reformas integrales en Málaga.",
    link: "https://levelupinteriores.es",
    tags: ["Reformas", "Málaga"],
  },
];

function ProjectCard({
  title,
  subtitle,
  description,
  link,
  tags,
  index,
}: {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  tags: string[];
  index: number;
}) {
  const colors = useColors();

  const openLink = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(link);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100).springify()}
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      {/* Card header */}
      <View style={[styles.cardHeader, { backgroundColor: colors.brandSoft }]}>
        <Feather name="monitor" size={28} color={colors.brand} />
      </View>

      <View style={styles.cardBody}>
        <Text style={[styles.cardSubtitle, { color: colors.brand }]}>
          {subtitle}
        </Text>
        <Text style={[styles.cardTitle, { color: colors.foreground }]}>
          {title}
        </Text>
        <Text style={[styles.cardDesc, { color: colors.mutedForeground }]}>
          {description}
        </Text>

        <View style={styles.tags}>
          {tags.map((tag) => (
            <View
              key={tag}
              style={[
                styles.tag,
                { backgroundColor: colors.brandSoft, borderColor: colors.brand + "22" },
              ]}
            >
              <Text style={[styles.tagText, { color: colors.brand }]}>{tag}</Text>
            </View>
          ))}
        </View>

        <Pressable
          onPress={openLink}
          style={({ pressed }) => [
            styles.visitBtn,
            { borderColor: colors.border, opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Text style={[styles.visitBtnText, { color: colors.foreground }]}>
            Ver proyecto
          </Text>
          <Feather name="external-link" size={14} color={colors.mutedForeground} />
        </Pressable>
      </View>
    </Animated.View>
  );
}

export default function PortfolioScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const openWhatsApp = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Linking.openURL(WHATSAPP);
  };

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: colors.background }]}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: isWeb ? 67 : insets.top + 24,
          paddingBottom: isWeb ? 34 + 84 : insets.bottom + 100,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View entering={FadeInDown.delay(0).springify()}>
        <Text style={[styles.sectionLabel, { color: colors.brand }]}>
          NUESTROS TRABAJOS
        </Text>
        <Text style={[styles.pageTitle, { color: colors.foreground }]}>
          Proyectos destacados
        </Text>
        <Text style={[styles.pageSub, { color: colors.mutedForeground }]}>
          Diseño, desarrollo y optimización digital de proyectos reales que
          generan resultados.
        </Text>
      </Animated.View>

      <View style={styles.projectsList}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </View>

      {/* More coming */}
      <Animated.View
        entering={FadeInDown.delay(200).springify()}
        style={[
          styles.comingSoon,
          { borderColor: colors.border, backgroundColor: colors.card },
        ]}
      >
        <Feather name="clock" size={24} color={colors.mutedForeground} />
        <Text style={[styles.comingSoonText, { color: colors.mutedForeground }]}>
          Más proyectos premium en proceso...
        </Text>
      </Animated.View>

      {/* CTA */}
      <Animated.View
        entering={FadeInDown.delay(280).springify()}
        style={[
          styles.cta,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.ctaTitle, { color: colors.foreground }]}>
          ¿Quieres un proyecto así?
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.ctaButton,
            { backgroundColor: colors.brand, opacity: pressed ? 0.82 : 1 },
          ]}
          onPress={openWhatsApp}
        >
          <Ionicons name="logo-whatsapp" size={18} color="#fff" />
          <Text style={styles.ctaText}>Quiero un proyecto así</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20 },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  pageTitle: { fontSize: 28, fontWeight: "700", marginBottom: 10 },
  pageSub: { fontSize: 14, lineHeight: 22, marginBottom: 28 },
  projectsList: { gap: 16 },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: "hidden",
  },
  cardHeader: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: { padding: 18, gap: 10 },
  cardSubtitle: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  cardTitle: { fontSize: 18, fontWeight: "700" },
  cardDesc: { fontSize: 13, lineHeight: 20 },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 6 },
  tag: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: { fontSize: 11, fontWeight: "600" },
  visitBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  visitBtnText: { fontSize: 13, fontWeight: "600" },
  comingSoon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginTop: 16,
  },
  comingSoonText: { fontSize: 13 },
  cta: {
    padding: 22,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 16,
    gap: 14,
    alignItems: "flex-start",
  },
  ctaTitle: { fontSize: 18, fontWeight: "700" },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: 12,
  },
  ctaText: { color: "#fff", fontSize: 14, fontWeight: "600" },
});
