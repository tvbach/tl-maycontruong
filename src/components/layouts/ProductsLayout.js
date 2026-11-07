"use client";

import { useState } from 'react';
import { CATEGORIES, MACHINES } from '@/data/machines';
import { MachineCard, OtherMachinesCard } from '@/components/products/MachineCard';

const ALL = { id: 'all', name: 'Tất cả' };
// The "other machines" card fills whatever is left of the last grid row.
const SM_SPAN = { 1: 'sm:col-span-1', 2: 'sm:col-span-2' };
const LG_SPAN = { 1: 'lg:col-span-1', 2: 'lg:col-span-2', 3: 'lg:col-span-3' };

const ProductsLayout = () => {
  const [cat, setCat] = useState('all');
  const list = cat === 'all' ? MACHINES : MACHINES.filter((m) => m.category === cat);
  const count = (id) => (id === 'all' ? MACHINES.length : MACHINES.filter((m) => m.category === id).length);

  return (
    <div>
      <div role="group" aria-label="Lọc theo loại máy" className="flex flex-wrap gap-2">
        {[ALL, ...CATEGORIES].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCat(c.id)}
            aria-pressed={cat === c.id}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-navy-200 px-5 font-semibold text-navy-800 transition-colors hover:border-navy-800 aria-pressed:border-navy-800 aria-pressed:bg-navy-800 aria-pressed:text-white"
          >
            {c.name}
            <span className="text-sm font-medium opacity-70">{count(c.id)}</span>
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">Đang hiển thị {list.length} máy</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((m) => (
          <MachineCard key={m.slug} machine={m} />
        ))}
        <OtherMachinesCard className={`${SM_SPAN[2 - (list.length % 2)]} ${LG_SPAN[3 - (list.length % 3)]}`} />
      </div>
    </div>
  );
};

export default ProductsLayout;
