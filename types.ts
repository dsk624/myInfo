import React from 'react';

export enum Category {
  HOME = 'HOME',
  BOOKS = 'BOOKS',
  ANCIENT_HISTORY = 'ANCIENT_HISTORY',
  MODERN_HISTORY = 'MODERN_HISTORY',
}

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  tags: string[];
}

export interface HistoryEvent {
  id: string;
  era: string;
  period: string;
  description: string;
  keyEvents: string[];
  significance: string;
}

export interface NavItem {
  id: Category;
  label: string;
  icon: React.ReactNode;
}