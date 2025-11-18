"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, CreditCard, Users } from "lucide-react";

export default function RevenueDashboardPage() {
  const stats = [
    { label: "Total Revenue", value: "$12,456", change: "+12.5%", icon: DollarSign, color: "text-green-600" },
    { label: "Est. Monthly", value: "$3,890", change: "+8.3%", icon: TrendingUp, color: "text-blue-600" },
    { label: "RPM", value: "$4.25", change: "+2.1%", icon: CreditCard, color: "text-purple-600" },
    { label: "Monetized Views", value: "892K", change: "+15.7%", icon: Users, color: "text-orange-600" },
  ];

  const revenue = [
    { month: "Jan", amount: 2850 },
    { month: "Feb", amount: 3100 },
    { month: "Mar", amount: 2950 },
    { month: "Apr", amount: 3400 },
    { month: "May", amount: 3200 },
    { month: "Jun", amount: 3890 },
  ];

  const sources = [
    { name: "Ads", revenue: "$8,234", percentage: 66 },
    { name: "Memberships", revenue: "$2,890", percentage: 23 },
    { name: "Super Chat", revenue: "$1,332", percentage: 11 },
  ];

  const mainPanel = (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 font-medium">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend (Last 6 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {revenue.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.month}</span>
                  <span className="text-muted-foreground">${item.amount}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: `${(item.amount / 4000) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Sources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sources.map((source, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{source.name}</span>
                  <span className="text-muted-foreground">{source.revenue}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { date: "Jun 2024", amount: "$3,890", status: "Pending" },
                { date: "May 2024", amount: "$3,200", status: "Paid" },
                { date: "Apr 2024", amount: "$3,400", status: "Paid" },
              ].map((payment, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{payment.date}</p>
                    <p className="text-sm text-muted-foreground">{payment.status}</p>
                  </div>
                  <p className="font-bold">{payment.amount}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <AppShell
      mode="dashboard"
      navbarChildren={<div className="font-semibold">Revenue Dashboard</div>}
      mainPanel={{ header: "Revenue Analytics", children: mainPanel }}
    />
  );
}
