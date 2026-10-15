import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  // Brand Color Palette
  static const Color tealPrimary = Color(0xFF10B981);
  static const Color tealDark = Color(0xFF059669);
  static const Color cyanAccent = Color(0xFF0EA5E9);
  static const Color purpleAccent = Color(0xFF8B5CF6);
  static const Color orangeAccent = Color(0xFFF59E0B);

  // Dark Theme Colors
  static const Color darkBgPrimary = Color(0xFF0A0E17);
  static const Color darkBgSecondary = Color(0xFF0F172A);
  static const Color darkBgCard = Color(0xFF161F36);
  static const Color darkBorder = Color(0x1FFFFFFF);
  static const Color darkTextPrimary = Color(0xFFF8FAFC);
  static const Color darkTextSecondary = Color(0xFF94A3B8);

  // Light Theme Colors
  static const Color lightBgPrimary = Color(0xFFF8FAFC);
  static const Color lightBgSecondary = Color(0xFFF1F5F9);
  static const Color lightBgCard = Color(0xFFFFFFFF);
  static const Color lightBorder = Color(0x140F172A);
  static const Color lightTextPrimary = Color(0xFF0F172A);
  static const Color lightTextSecondary = Color(0xFF475569);

  static ThemeData darkTheme() {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: darkBgPrimary,
      colorScheme: const ColorScheme.dark(
        primary: tealPrimary,
        secondary: cyanAccent,
        surface: darkBgCard,
        onSurface: darkTextPrimary,
      ),
      textTheme: GoogleFonts.interTextTheme(
        ThemeData.dark().textTheme,
      ).copyWith(
        headlineLarge: GoogleFonts.outfit(
          fontSize: 48,
          fontWeight: FontWeight.w800,
          color: darkTextPrimary,
          letterSpacing: -1.0,
        ),
        headlineMedium: GoogleFonts.outfit(
          fontSize: 32,
          fontWeight: FontWeight.w700,
          color: darkTextPrimary,
          letterSpacing: -0.5,
        ),
        headlineSmall: GoogleFonts.outfit(
          fontSize: 22,
          fontWeight: FontWeight.w700,
          color: darkTextPrimary,
        ),
        titleMedium: GoogleFonts.outfit(
          fontSize: 18,
          fontWeight: FontWeight.w600,
          color: darkTextPrimary,
        ),
        bodyLarge: GoogleFonts.inter(
          fontSize: 16,
          color: darkTextSecondary,
          height: 1.6,
        ),
        bodyMedium: GoogleFonts.inter(
          fontSize: 14,
          color: darkTextSecondary,
          height: 1.5,
        ),
      ),
    );
  }

  static ThemeData lightTheme() {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      scaffoldBackgroundColor: lightBgPrimary,
      colorScheme: const ColorScheme.light(
        primary: tealDark,
        secondary: cyanAccent,
        surface: lightBgCard,
        onSurface: lightTextPrimary,
      ),
      textTheme: GoogleFonts.interTextTheme(
        ThemeData.light().textTheme,
      ).copyWith(
        headlineLarge: GoogleFonts.outfit(
          fontSize: 48,
          fontWeight: FontWeight.w800,
          color: lightTextPrimary,
          letterSpacing: -1.0,
        ),
        headlineMedium: GoogleFonts.outfit(
          fontSize: 32,
          fontWeight: FontWeight.w700,
          color: lightTextPrimary,
          letterSpacing: -0.5,
        ),
        headlineSmall: GoogleFonts.outfit(
          fontSize: 22,
          fontWeight: FontWeight.w700,
          color: lightTextPrimary,
        ),
        titleMedium: GoogleFonts.outfit(
          fontSize: 18,
          fontWeight: FontWeight.w600,
          color: lightTextPrimary,
        ),
        bodyLarge: GoogleFonts.inter(
          fontSize: 16,
          color: lightTextSecondary,
          height: 1.6,
        ),
        bodyMedium: GoogleFonts.inter(
          fontSize: 14,
          color: lightTextSecondary,
          height: 1.5,
        ),
      ),
    );
  }
}
