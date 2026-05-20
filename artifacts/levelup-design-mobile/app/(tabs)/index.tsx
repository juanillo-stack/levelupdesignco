import { Feather, Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

import { useColors } from "@/hooks/useColors";

const WHATSAPP = "https://wa.me/34606899991";

const SERVICES = [
  {
    icon: "globe" as const,
    title: "Página web profesional",
    desc: "Diseño moderno orientado a captar clientes y transmitir profesionalidad.",
  },
  {
    icon: "message-circle" as const,
    title: "Automatización WhatsApp + Google Business",
    desc: "Atención rápida, automatizada y mayor visibilidad local.",
  },
  {
    icon: "share-2" as const,
    title: "Redes sociales + correo corporativo",
    desc: "Imagen profesional y presencia online coherente para tu negocio.",
  },
  {
    icon: "layout" as const,
    title: "App personalizada para tu negocio",
    desc: "Gestión de clientes, presupuestos y calendario en un solo lugar.",
  },
];

const STEPS = [
  {
    n: "01",
    icon: "search" as const,
    title: "Analizo",
    sub: "Tu negocio y objetivos",
    desc: "Necesito entender qué haces, qué quieres conseguir y cómo quieres que la gente vea tu marca.",
  },
  {
    n: "02",
    icon: "edit-2" as const,
    title: "Diseño",
    sub: "Tu presencia digital",
    desc: "Diseño pensado para transmitir quién eres, cómo trabajas y la personalidad de tu marca.",
  },
  {
    n: "03",
    icon: "code" as const,
    title: "Desarrollo",
    sub: "Web y herramientas",
    desc: "Construyo la web y las herramientas necesarias para que tu negocio tenga una presencia sólida.",
  },
  {
    n: "04",
    icon: "zap" as const,
    title: "Optimizo",
    sub: "Todo funcionando",
    desc: "Reviso cada detalle para que la experiencia sea clara, cómoda y coherente.",
  },
];

function ServiceCard({
  icon,
  title,
  desc,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  index: number;
}) {
  const colors = useColors();
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 80).springify()}
      style={[
        styles.serviceCard,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      <View style={[styles.serviceIcon, { backgroundColor: colors.brandSoft }]}>
        <Feather name={icon as any} size={20} color={colors.brand} />
      </View>
      <View style={styles.serviceText}>
        <Text style={[styles.serviceTitle, { color: colors.foreground }]}>
          {title}
        </Text>
        <Text style={[styles.serviceDesc, { color: colors.mutedForeground }]}>
          {desc}
        </Text>
      </View>
    </Animated.View>
  );
}

function StepItem({
  n,
  icon,
  title,
  sub,
  desc,
  index,
  isLast,
}: {
  n: string;
  icon: string;
  title: string;
  sub: string;
  desc: string;
  index: number;
  isLast: boolean;
}) {
  const colors = useColors();
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 80).springify()}
      style={styles.stepRow}
    >
      <View style={styles.stepLeft}>
        <View style={[styles.stepCircle, { backgroundColor: colors.brandSoft }]}>
          <Feather name={icon as any} size={16} color={colors.brand} />
        </View>
        {!isLast && (
          <View style={[styles.stepLine, { backgroundColor: colors.border }]} />
        )}
      </View>
      <View style={styles.stepContent}>
        <Text style={[styles.stepNum, { color: colors.brand }]}>{n}</Text>
        <Text style={[styles.stepTitle, { color: colors.foreground }]}>
          {title}
        </Text>
        <Text style={[styles.stepSub, { color: colors.brand }]}>{sub}</Text>
        <Text style={[styles.stepDesc, { color: colors.mutedForeground }]}>
          {desc}
        </Text>
      </View>
    </Animated.View>
  );
}

export default function HomeScreen() {
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
      {/* Hero */}
      <Animated.View entering={FadeInDown.delay(0).springify()} style={styles.hero}>
        <View
          style={[
            styles.badge,
            {
              backgroundColor: colors.brandSoft,
              borderColor: colors.brand + "33",
            },
          ]}
        >
          <View style={[styles.badgeDot, { backgroundColor: colors.brand }]} />
          <Text style={[styles.badgeText, { color: colors.brand }]}>
            CONSULTORÍA WEB & AUTOMATIZACIÓN
          </Text>
        </View>

        <Text style={[styles.heroTitle, { color: colors.foreground }]}>
          {"Desarrollo Web &\n"}
          <Text style={{ color: colors.brand }}>
            {"Optimización\nde Empresas"}
          </Text>
        </Text>

        <Text style={[styles.heroSub, { color: colors.mutedForeground }]}>
          De idea a negocio.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.ctaButton,
            { backgroundColor: colors.brand, opacity: pressed ? 0.82 : 1 },
          ]}
          onPress={openWhatsApp}
        >
          <Ionicons name="logo-whatsapp" size={18} color="#fff" />
          <Text style={styles.ctaText}>Solicitar asesoramiento</Text>
        </Pressable>
      </Animated.View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      {/* Services */}
      <Animated.View entering={FadeInUp.delay(100).springify()}>
        <Text style={[styles.sectionLabel, { color: colors.brand }]}>
          SERVICIOS
        </Text>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Lo que hago por tu negocio
        </Text>
        <Text style={[styles.sectionSub, { color: colors.mutedForeground }]}>
          Soluciones digitales premium para que tu negocio funcione con una
          presencia clara y profesional.
        </Text>
      </Animated.View>

      <View style={styles.servicesGrid}>
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </View>

      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      {/* How I Work */}
      <Animated.View entering={FadeInUp.delay(100).springify()}>
        <Text style={[styles.sectionLabel, { color: colors.brand }]}>
          MÉTODO
        </Text>
        <Text style={[styles.sectionTitle, { color: colors.foreground }]}>
          Cómo trabajo
        </Text>
      </Animated.View>

      <View style={styles.stepsContainer}>
        {STEPS.map((step, i) => (
          <StepItem
            key={step.n}
            {...step}
            index={i}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </View>

      {/* Bottom CTA */}
      <Animated.View
        entering={FadeInDown.delay(200).springify()}
        style={[
          styles.bottomCta,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.bottomCtaTitle, { color: colors.foreground }]}>
          ¿Listo para dar el salto digital?
        </Text>
        <Text style={[styles.bottomCtaSub, { color: colors.mutedForeground }]}>
          Escríbeme y hablamos sin compromiso.
        </Text>
        <Pressable
          style={({ pressed }) => [
            styles.ctaButton,
            {
              backgroundColor: colors.brand,
              opacity: pressed ? 0.82 : 1,
              marginTop: 16,
            },
          ]}
          onPress={openWhatsApp}
        >
          <Ionicons name="logo-whatsapp" size={18} color="#fff" />
          <Text style={styles.ctaText}>Contactar por WhatsApp</Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20 },
  hero: { paddingBottom: 8 },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    alignSelf: "flex-start",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 18,
  },
  badgeDot: { width: 6, height: 6, borderRadius: 3 },
  badgeText: { fontSize: 9, fontWeight: "700", letterSpacing: 1.3 },
  heroTitle: {
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 36,
    marginBottom: 12,
  },
  heroSub: { fontSize: 18, fontStyle: "italic", marginBottom: 26 },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  ctaText: { color: "#fff", fontSize: 15, fontWeight: "600" },
  divider: { height: 1, marginVertical: 32 },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.4,
    marginBottom: 6,
  },
  sectionTitle: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  sectionSub: { fontSize: 14, lineHeight: 22, marginBottom: 20 },
  servicesGrid: { gap: 10 },
  serviceCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  serviceText: { flex: 1, gap: 4 },
  serviceTitle: { fontSize: 14, fontWeight: "600", lineHeight: 19 },
  serviceDesc: { fontSize: 12, lineHeight: 18 },
  stepsContainer: { gap: 0, marginTop: 20 },
  stepRow: { flexDirection: "row", gap: 14 },
  stepLeft: { alignItems: "center", width: 36 },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  stepLine: { flex: 1, width: 2, marginTop: 4, marginBottom: 4, minHeight: 20 },
  stepContent: { flex: 1, paddingBottom: 26 },
  stepNum: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 2,
  },
  stepTitle: { fontSize: 16, fontWeight: "700", marginBottom: 2 },
  stepSub: { fontSize: 11, fontWeight: "600", marginBottom: 6, opacity: 0.8 },
  stepDesc: { fontSize: 13, lineHeight: 20 },
  bottomCta: {
    padding: 22,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 16,
  },
  bottomCtaTitle: { fontSize: 19, fontWeight: "700", marginBottom: 6 },
  bottomCtaSub: { fontSize: 13, lineHeight: 20 },
});
