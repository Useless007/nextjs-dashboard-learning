import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

type Props = {};

export default function Page({}: Props) {
  return <div>Customers page</div>;
}
