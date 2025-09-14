import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, TrendingUp, BarChart3, Users, DollarSign, 
  Target, Activity, Building2, Percent, RefreshCw, 
  ArrowUp, ArrowDown, Clock, MapPin 
} from 'lucide-react';
import { SessionData } from '@/hooks/useSessionsData';
import { formatCurrency, formatNumber, formatPercentage } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface MonthOnMonthClassTableProps {
  data: SessionData[]; // This should be ALL data, ignoring current date filters
  location: string;
}

type MetricType = 'attendance' | 'sessions' | 'revenue' | 'fillRate' | 'classAverage' | 'capacity' | 'bookingRate';
type GroupByType = 'trainer' | 'class' | 'location' | 'day_time' | 'trainer_class' | 'overall';

interface MonthlyData {
  month: string;
  monthLabel: string;
  sessions: number;
  attendance: number;
  capacity: number;
  revenue: number;
  fillRate: number;
  classAverage: number;
  bookingRate: number;
  lateCancellations: number;
  uniqueClasses: number;
  uniqueTrainers: number;
}

interface GroupedRow {
  groupKey: string;
  groupLabel: string;
  monthlyData: Record<string, MonthlyData>;
  totals: MonthlyData;
}

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const MonthOnMonthClassTable: React.FC<MonthOnMonthClassTableProps> = ({ 
  data, 
  location 
}) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricType>('attendance');
  const [groupBy, setGroupBy] = useState<GroupByType>('overall');
  const [showGrowthRate, setShowGrowthRate] = useState(false);

  // Get all unique months from the data (ignoring current filters)
  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    data.forEach(session => {
      const date = new Date(session.date);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      months.add(monthKey);
    });
    
    return Array.from(months).sort().map(monthKey => {
      const [year, month] = monthKey.split('-');
      const monthIndex = parseInt(month) - 1;
      return {
        key: monthKey,
        label: `${MONTH_NAMES[monthIndex]} ${year}`,
        shortLabel: `${MONTH_NAMES[monthIndex]}'${year.slice(2)}`
      };
    });
  }, [data]);

  // Process data by month and grouping
  const processedData = useMemo(() => {
    const groupedSessions = new Map<string, SessionData[]>();
    
    // Group sessions by the selected grouping criteria
    data.forEach(session => {
      let groupKey = 'Overall';
      switch (groupBy) {
        case 'trainer':
          groupKey = session.trainerName || 'Unknown Trainer';
          break;
        case 'class':
          groupKey = session.cleanedClass || 'Unknown Class';
          break;
        case 'location':
          groupKey = session.location || 'Unknown Location';
          break;
        case 'day_time':
          groupKey = `${session.dayOfWeek} ${session.time}`;
          break;
        case 'trainer_class':
          groupKey = `${session.trainerName || 'Unknown'} - ${session.cleanedClass || 'Unknown'}`;
          break;
        case 'overall':
        default:
          groupKey = 'Overall';
          break;
      }
      
      if (!groupedSessions.has(groupKey)) {
        groupedSessions.set(groupKey, []);
      }
      groupedSessions.get(groupKey)!.push(session);
    });

    // Process each group's monthly data
    const result: GroupedRow[] = Array.from(groupedSessions.entries()).map(([groupKey, sessions]) => {
      const monthlyData: Record<string, MonthlyData> = {};
      
      // Initialize monthly data for all available months
      availableMonths.forEach(month => {
        monthlyData[month.key] = {
          month: month.key,
          monthLabel: month.label,
          sessions: 0,
          attendance: 0,
          capacity: 0,
          revenue: 0,
          fillRate: 0,
          classAverage: 0,
          bookingRate: 0,
          lateCancellations: 0,
          uniqueClasses: 0,
          uniqueTrainers: 0
        };
      });

      // Aggregate data by month
      sessions.forEach(session => {
        const date = new Date(session.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
        if (monthlyData[monthKey]) {
          const monthData = monthlyData[monthKey];
          monthData.sessions += 1;
          monthData.attendance += session.checkedInCount || 0;
          monthData.capacity += session.capacity || 0;
          monthData.revenue += session.totalPaid || 0;
          monthData.lateCancellations += session.lateCancelledCount || 0;
        }
      });

      // Calculate derived metrics for each month
      Object.values(monthlyData).forEach(monthData => {
        monthData.fillRate = monthData.capacity > 0 ? (monthData.attendance / monthData.capacity) * 100 : 0;
        monthData.classAverage = monthData.sessions > 0 ? monthData.attendance / monthData.sessions : 0;
        monthData.bookingRate = monthData.capacity > 0 ? (monthData.attendance / monthData.capacity) * 100 : 0;
      });

      // Calculate totals
      const totals: MonthlyData = {
        month: 'total',
        monthLabel: 'Total',
        sessions: Object.values(monthlyData).reduce((sum, m) => sum + m.sessions, 0),
        attendance: Object.values(monthlyData).reduce((sum, m) => sum + m.attendance, 0),
        capacity: Object.values(monthlyData).reduce((sum, m) => sum + m.capacity, 0),
        revenue: Object.values(monthlyData).reduce((sum, m) => sum + m.revenue, 0),
        lateCancellations: Object.values(monthlyData).reduce((sum, m) => sum + m.lateCancellations, 0),
        fillRate: 0,
        classAverage: 0,
        bookingRate: 0,
        uniqueClasses: 0,
        uniqueTrainers: 0
      };

      totals.fillRate = totals.capacity > 0 ? (totals.attendance / totals.capacity) * 100 : 0;
      totals.classAverage = totals.sessions > 0 ? totals.attendance / totals.sessions : 0;
      totals.bookingRate = totals.capacity > 0 ? (totals.attendance / totals.capacity) * 100 : 0;

      return {
        groupKey,
        groupLabel: groupKey,
        monthlyData,
        totals
      };
    });

    // Sort by total attendance (descending)
    return result.sort((a, b) => b.totals.attendance - a.totals.attendance);
  }, [data, groupBy, availableMonths]);

  const getMetricValue = (monthData: MonthlyData, metric: MetricType): string => {
    switch (metric) {
      case 'attendance':
        return formatNumber(monthData.attendance);
      case 'sessions':
        return formatNumber(monthData.sessions);
      case 'revenue':
        return formatCurrency(monthData.revenue);
      case 'fillRate':
        return formatPercentage(monthData.fillRate);
      case 'classAverage':
        return formatNumber(monthData.classAverage);
      case 'capacity':
        return formatNumber(monthData.capacity);
      case 'bookingRate':
        return formatPercentage(monthData.bookingRate);
      default:
        return formatNumber(monthData.attendance);
    }
  };

  const getGrowthRate = (current: number, previous: number): number => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return ((current - previous) / previous) * 100;
  };

  const metricOptions = [
    { value: 'attendance', label: 'Attendance', icon: Users },
    { value: 'sessions', label: 'Sessions', icon: Calendar },
    { value: 'revenue', label: 'Revenue', icon: DollarSign },
    { value: 'fillRate', label: 'Fill Rate', icon: Target },
    { value: 'classAverage', label: 'Class Average', icon: BarChart3 },
    { value: 'capacity', label: 'Capacity', icon: Building2 },
    { value: 'bookingRate', label: 'Booking Rate', icon: Percent }
  ];

  const groupOptions = [
    { value: 'overall', label: 'Overall', icon: BarChart3 },
    { value: 'trainer', label: 'By Trainer', icon: Users },
    { value: 'class', label: 'By Class', icon: Activity },
    { value: 'location', label: 'By Location', icon: MapPin },
    { value: 'day_time', label: 'By Day & Time', icon: Clock },
    { value: 'trainer_class', label: 'By Trainer & Class', icon: Target }
  ];

  return (
    <Card className="w-full shadow-2xl bg-gradient-to-br from-white via-slate-50 to-purple-50/30">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-3">
            <Calendar className="w-6 h-6" />
            Month-on-Month Analytics
          </CardTitle>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            {data.length} Total Sessions
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Metric Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Metric</label>
              <Select value={selectedMetric} onValueChange={(value) => setSelectedMetric(value as MetricType)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {metricOptions.map(option => {
                    const Icon = option.icon;
                    return (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {option.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Group By Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Group By</label>
              <Select value={groupBy} onValueChange={(value) => setGroupBy(value as GroupByType)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {groupOptions.map(option => {
                    const Icon = option.icon;
                    return (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          {option.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant={showGrowthRate ? "default" : "outline"}
              size="sm"
              onClick={() => setShowGrowthRate(!showGrowthRate)}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Growth %
            </Button>
            
            <Badge variant="outline" className="text-sm">
              Date Filters Ignored
            </Badge>
          </div>
        </div>

        {/* Month-on-Month Table */}
        <div className="border rounded-lg overflow-hidden bg-white shadow-lg">
          <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-slate-100 z-20 shadow-sm border-b-2 border-slate-200">
                <TableRow>
                  <TableHead className="min-w-[200px] sticky left-0 bg-slate-100 border-r font-bold text-slate-900">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4" />
                      {groupBy === 'trainer' ? 'Trainer' : 
                       groupBy === 'class' ? 'Class' :
                       groupBy === 'location' ? 'Location' :
                       groupBy === 'day_time' ? 'Day & Time' :
                       groupBy === 'trainer_class' ? 'Trainer & Class' : 'Category'}
                    </div>
                  </TableHead>
                  
                  {availableMonths.map(month => (
                    <TableHead key={month.key} className="text-center min-w-[120px] font-bold text-slate-900 bg-slate-100">
                      <div className="space-y-1">
                        <div className="font-semibold">{month.shortLabel}</div>
                        {showGrowthRate && (
                          <div className="text-xs text-gray-500">Growth %</div>
                        )}
                      </div>
                    </TableHead>
                  ))}
                  
                  <TableHead className="text-center min-w-[120px] bg-blue-100 font-bold text-slate-900">
                    <div className="space-y-1">
                      <div className="font-semibold">Total</div>
                      {showGrowthRate && (
                        <div className="text-xs text-gray-500">Avg Growth</div>
                      )}
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {processedData.map((row, rowIndex) => (
                  <TableRow key={row.groupKey} className={cn(
                    "border-b hover:bg-blue-50/50 transition-colors",
                    rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  )}>
                    <TableCell className="sticky left-0 bg-inherit border-r font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                          {row.groupLabel.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{row.groupLabel}</div>
                          <div className="text-xs text-gray-500">
                            {row.totals.sessions} sessions total
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    
                    {availableMonths.map((month, index) => {
                      const monthData = row.monthlyData[month.key];
                      const prevMonthData = index > 0 ? row.monthlyData[availableMonths[index - 1].key] : null;
                      
                      const getCurrentValue = (metric: MetricType): number => {
                        switch (metric) {
                          case 'attendance': return monthData.attendance;
                          case 'sessions': return monthData.sessions;
                          case 'revenue': return monthData.revenue;
                          case 'fillRate': return monthData.fillRate;
                          case 'classAverage': return monthData.classAverage;
                          case 'capacity': return monthData.capacity;
                          case 'bookingRate': return monthData.bookingRate;
                          default: return monthData.attendance;
                        }
                      };

                      const currentValue = getCurrentValue(selectedMetric);
                      const previousValue = prevMonthData ? getCurrentValue(selectedMetric) : 0;
                      const growthRate = prevMonthData ? getGrowthRate(currentValue, previousValue) : 0;

                      return (
                        <TableCell key={month.key} className="text-center">
                          <div className="space-y-1">
                            <div className="font-semibold text-gray-900">
                              {getMetricValue(monthData, selectedMetric)}
                            </div>
                            {showGrowthRate && prevMonthData && (
                              <div className={cn(
                                "text-xs font-medium flex items-center justify-center gap-1",
                                growthRate > 0 ? "text-green-600" : growthRate < 0 ? "text-red-600" : "text-gray-500"
                              )}>
                                {growthRate > 0 ? (
                                  <ArrowUp className="w-3 h-3" />
                                ) : growthRate < 0 ? (
                                  <ArrowDown className="w-3 h-3" />
                                ) : null}
                                {formatPercentage(Math.abs(growthRate))}
                              </div>
                            )}
                          </div>
                        </TableCell>
                      );
                    })}
                    
                    <TableCell className="text-center bg-blue-50/50">
                      <div className="font-bold text-blue-800">
                        {getMetricValue(row.totals, selectedMetric)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold text-blue-800">{availableMonths.length}</div>
              <div className="text-sm text-blue-600">Months Tracked</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold text-green-800">
                {formatNumber(data.reduce((sum, s) => sum + (s.checkedInCount || 0), 0))}
              </div>
              <div className="text-sm text-green-600">Total Attendance</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-4 text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-2xl font-bold text-purple-800">
                {formatCurrency(data.reduce((sum, s) => sum + (s.totalPaid || 0), 0))}
              </div>
              <div className="text-sm text-purple-600">Total Revenue</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-2 text-orange-600" />
              <div className="text-2xl font-bold text-orange-800">
                {processedData.length}
              </div>
              <div className="text-sm text-orange-600">
                {groupBy === 'trainer' ? 'Trainers' : 
                 groupBy === 'class' ? 'Classes' :
                 groupBy === 'location' ? 'Locations' : 'Groups'}
              </div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};