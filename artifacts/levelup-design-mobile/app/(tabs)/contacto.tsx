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

const WHATSAPP_NUMBER = "34606899991";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const INFO_ITEMS = [
  { icon: "map-pin" as const, label: "Ubicación", value: "Málaga, España" },
  { icon: "phone" as const, label: "WhatsApp", value: "+34 606 899 991" },
  {
    icon: "globe" as const,
    label: "Web",
    value: "LevelUp Design Co.",
    subtitle: "Consultoría web & automatización",
  },
];

const WHAT_I_DO = [
  "Páginas web profesionales",
  "Automatización WhatsApp + Google Business",
  "Gestión de redes sociales",
  "Apps personalizadas para negocios",
];

export default function ContactoScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const openWhatsApp = (message?: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const url = message
      ? `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
      : WHATSAPP_URL;
    Linking.openURL(url);
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
      {/* Header */}
      <Animated.View entering={FadeInDown.delay(0).springify()}>
        <Text style={[styles.label, { color: colors.brand }]}>CONTACTO</Text>
        <Text style={[styles.title, { color: colors.foreground }]}>
          Hablemos de tu negocio
        </Text>
        <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
          Cuéntame tu idea y te digo cómo podemos hacerla realidad.
        </Text>
      </Animated.View>

      {/* Main WhatsApp CTA */}
      <Animated.View entering={FadeInDown.delay(80).springify()}>
        <Pressable
          style={({ pressed }) => [
            styles.mainCta,
            { backgroundColor: "#25D366", opacity: pressed ? 0.88 : 1 },
          ]}
          onPress={() =>
            openWhatsApp("Hola Juan, me gustaría hablar sobre mi proyecto.")
          }
        >
          <Ionicons name="logo-whatsapp" size={26} color="#fff" />
          <View>
            <Text style={styles.mainCtaTitle}>Escribir por WhatsApp</Text>
            <Text style={styles.mainCtaSub}>+34 606 899 991</Text>
          </View>
          <Feather name="arrow-right" size={20} color="#fff" style={styles.mainCtaArrow} />
        </Pressable>
      </Animated.View>

      {/* Info card */}
      <Animated.View
        entering={FadeInDown.delay(140).springify()}
        style={[
          styles.infoCard,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.cardLabel, { color: colors.brand }]}>
          JUAN LEIVA
        </Text>
        <Text style={[styles.cardTitle, { color: colors.foreground }]}>
          Fundador & Consultor
        </Text>
        <Text style={[styles.cardSub, { color: colors.mutedForeground }]}>
          LevelUp Design Co.
        </Text>

        <View style={[styles.separator, { backgroundColor: colors.border }]} />

        {INFO_ITEMS.map((item) => (
          <View key={item.label} style={styles.infoRow}>
            <View
              style={[styles.infoIcon, { backgroundColor: colors.brandSoft }]}
            >
              <Feather name={item.icon} size={15} color={colors.brand} />
            </View>
            <View style={styles.infoText}>
              <Text style={[styles.infoLabel, { color: colors.mutedForeground }]}>
                {item.label}
              </Text>
              <Text style={[styles.infoValue, { color: colors.foreground }]}>
                {item.value}
              </Text>
              {item.subtitle && (
                <Text
                  style={[styles.infoSubtitle, { color: colors.mutedForeground }]}
                >
                  {item.subtitle}
                </Text>
              )}
            </View>
          </View>
        ))}
      </Animated.View>

      {/* Services quick list */}
      <Animated.View
        entering={FadeInDown.delay(200).springify()}
        style={[
          styles.servicesCard,
          { backgroundColor: colors.card, borderColor: colors.border },
        ]}
      >
        <Text style={[styles.cardLabel, { color: colors.brand }]}>
          ¿EN QUÉ PUEDO AYUDARTE?
        </Text>
        {WHAT_I_DO.map((item) => (
          <View key={item} style={styles.serviceItem}>
            <View style={[styles.dot, { backgroundColor: colors.brand }]} />
            <Text style={[styles.serviceText, { color: colors.foreground }]}>
              {item}
            </Text>
          </View>
        ))}
      </Animated.View>

      {/* Quick action buttons */}
      <Animated.View
        entering={FadeInDown.delay(260).springify()}
        style={styles.quickActions}
      >
        <Pressable
          style={({ pressed }) => [
            styles.quickBtn,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              opacity: pressed ? 0.75 : 1,
            },
          ]}
          onPress={() =>
            openWhatsApp("Hola, me interesa una página web profesional.")
          }
        >
          <Feather name="globe" size={18} color={colors.brand} />
          <Text style={[styles.quickBtnText, { color: colors.foreground }]}>
            Quiero una web
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.quickBtn,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              opacity: pressed ? 0.75 : 1,
            },
          ]}
          onPress={() =>
            openWhatsApp("Hola, me interesa automatizar mi negocio.")
          }
        >
          <Feather name="zap" size={18} color={colors.brand} />
          <Text style={[styles.quickBtnText, { color: colors.foreground }]}>
            Automatizar negocio
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.quickBtn,
            {
              backgroundColor: colors.card,
              borderColor: colors.border,
              opacity: pressed ? 0.75 : 1,
            },
          ]}
          onPress={() =>
            openWhatsApp("Hola, me interesa hablar sobre mi proyecto.")
          }
        >
          <Feather name="message-square" size={18} color={colors.brand} />
          <Text style={[styles.quickBtnText, { color: colors.foreground }]}>
            Otro proyecto
          </Text>
        </Pressable>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  content: { paddingHorizontal: 20, gap: 16 },
  label: { fontSize: 10, fontWeight: "700", letterSpacing: 1.4, marginBottom: 6 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 8 },
  subtitle: { fontSize: 14, lineHeight: 22 },
  mainCta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 18,
    borderRadius: 18,
  },
  mainCtaTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  mainCtaSub: { color: "rgba(255,255,255,0.8)", fontSize: 12, marginTop: 2 },
  mainCtaArrow: { marginLeft: "auto" },
  infoCard: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    gap: 4,
  },
  cardLabel: { fontSize: 10, fontWeight: "700", letterSpacing: 1.2 },
  cardTitle: { fontSize: 20, fontWeight: "700" },
  cardSub: { fontSize: 13 },
  separator: { height: 1, marginVertical: 14 },
  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 12,
  },
  infoIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoText: { flex: 1 },
  infoLabel: { fontSize: 10, fontWeight: "600", letterSpacing: 0.6, marginBottom: 2 },
  infoValue: { fontSize: 14, fontWeight: "600" },
  infoSubtitle: { fontSize: 11, marginTop: 2 },
  servicesCard: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    gap: 10,
  },
  serviceItem: { flexDirection: "row", alignItems: "center", gap: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, flexShrink: 0 },
  serviceText: { fontSize: 14, fontWeight: "500" },
  quickActions: { gap: 10 },
  quickBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  quickBtnText: { fontSize: 14, fontWeight: "600" },
});
