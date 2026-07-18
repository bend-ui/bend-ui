import { DatePicker as DatePickerPrimitive, Portal } from '@ark-ui/react';
import { Input } from '../Input';
import { withRecipe, withParts } from '../../utils';
import {
  datePicker,
  DatePickerVariantProps,
} from '@bend-ui/styled-system/recipes';
import { Assign, HTMLStyledProps } from '@bend-ui/styled-system/types';

export interface DatePickerRootProps
  extends
    Assign<HTMLStyledProps<'div'>, DatePickerPrimitive.RootProps>,
    DatePickerVariantProps {}
const DatePickerRoot = withRecipe<DatePickerRootProps>(
  DatePickerPrimitive.Root,
  datePicker,
  'root',
);

export type DatePickerLabelProps = Assign<
  HTMLStyledProps<'label'>,
  DatePickerPrimitive.LabelProps
>;
const DatePickerLabel = withParts<DatePickerLabelProps>(
  DatePickerPrimitive.Label,
  'label',
);

export type DatePickerControlProps = Assign<
  HTMLStyledProps<'div'>,
  DatePickerPrimitive.ControlProps
>;
const DatePickerControl = withParts<DatePickerControlProps>(
  DatePickerPrimitive.Control,
  'control',
);

export type DatePickerInputProps = Assign<
  HTMLStyledProps<'input'>,
  DatePickerPrimitive.InputProps
>;
const DatePickerInput = withParts<DatePickerInputProps>(
  DatePickerPrimitive.Input,
  'input',
);

export type DatePickerTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  DatePickerPrimitive.TriggerProps
>;
const DatePickerTrigger = withParts<DatePickerTriggerProps>(
  DatePickerPrimitive.Trigger,
  'trigger',
);

export type DatePickerClearTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  DatePickerPrimitive.ClearTriggerProps
>;
const DatePickerClearTrigger = withParts<DatePickerClearTriggerProps>(
  DatePickerPrimitive.ClearTrigger,
  'clear-trigger',
);

export type DatePickerViewProps = Assign<
  HTMLStyledProps<'div'>,
  DatePickerPrimitive.ViewProps
>;
const DatePickerView = withParts<DatePickerViewProps>(
  DatePickerPrimitive.View,
  'view',
);

export type DatePickerContextProps = Assign<
  HTMLStyledProps<'div'>,
  DatePickerPrimitive.ContextProps
>;
const DatePickerContext = withParts<DatePickerContextProps>(
  DatePickerPrimitive.Context,
  'context',
);

export type DatePickerViewControlProps = Assign<
  HTMLStyledProps<'div'>,
  DatePickerPrimitive.ViewControlProps
>;
const DatePickerViewControl = withParts<DatePickerViewControlProps>(
  DatePickerPrimitive.ViewControl,
  'view-control',
);

export type DatePickerPrevTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  DatePickerPrimitive.PrevTriggerProps
>;
const DatePickerPrevTrigger = withParts<DatePickerPrevTriggerProps>(
  DatePickerPrimitive.PrevTrigger,
  'prev-trigger',
);

export type DatePickerViewTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  DatePickerPrimitive.ViewTriggerProps
>;
const DatePickerViewTrigger = withParts<DatePickerViewTriggerProps>(
  DatePickerPrimitive.ViewTrigger,
  'view-trigger',
);

export type DatePickerNextTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  DatePickerPrimitive.NextTriggerProps
>;
const DatePickerNextTrigger = withParts<DatePickerNextTriggerProps>(
  DatePickerPrimitive.NextTrigger,
  'next-trigger',
);

export type DatePickerRangeTextProps = Assign<
  HTMLStyledProps<'span'>,
  DatePickerPrimitive.RangeTextProps
>;
const DatePickerRangeText = withParts<DatePickerRangeTextProps>(
  DatePickerPrimitive.RangeText,
  'range-text',
);

export type DatePickerTableProps = Assign<
  HTMLStyledProps<'table'>,
  DatePickerPrimitive.TableProps
>;
const DatePickerTable = withParts<DatePickerTableProps>(
  DatePickerPrimitive.Table,
  'table',
);

export type DatePickerTableHeadProps = Assign<
  HTMLStyledProps<'thead'>,
  DatePickerPrimitive.TableHeadProps
>;
const DatePickerTableHead = withParts<DatePickerTableHeadProps>(
  DatePickerPrimitive.TableHead,
  'table-head',
);

export type DatePickerTableRowProps = Assign<
  HTMLStyledProps<'tr'>,
  DatePickerPrimitive.TableRowProps
>;
const DatePickerTableRow = withParts<DatePickerTableRowProps>(
  DatePickerPrimitive.TableRow,
  'table-row',
);

export type DatePickerTableHeaderProps = Assign<
  HTMLStyledProps<'th'>,
  DatePickerPrimitive.TableHeaderProps
>;
const DatePickerTableHeader = withParts<DatePickerTableHeaderProps>(
  DatePickerPrimitive.TableHeader,
  'table-header',
);

export type DatePickerTableBodyProps = Assign<
  HTMLStyledProps<'tbody'>,
  DatePickerPrimitive.TableBodyProps
>;
const DatePickerTableBody = withParts<DatePickerTableBodyProps>(
  DatePickerPrimitive.TableBody,
  'table-body',
);

export type DatePickerTableCellProps = Assign<
  HTMLStyledProps<'td'>,
  DatePickerPrimitive.TableCellProps
>;
const DatePickerTableCell = withParts<DatePickerTableCellProps>(
  DatePickerPrimitive.TableCell,
  'table-cell',
);

export type DatePickerTableCellTriggerProps = Assign<
  HTMLStyledProps<'button'>,
  DatePickerPrimitive.TableCellTriggerProps
>;
const DatePickerTableCellTrigger = withParts<DatePickerTableCellTriggerProps>(
  DatePickerPrimitive.TableCellTrigger,
  'table-cell-trigger',
);

export type DatePickerYearSelectProps = Assign<
  HTMLStyledProps<'select'>,
  DatePickerPrimitive.YearSelectProps
>;
const DatePickerYearSelect = withParts<DatePickerYearSelectProps>(
  DatePickerPrimitive.YearSelect,
  'year-select',
);

export type DatePickerMonthSelectProps = Assign<
  HTMLStyledProps<'select'>,
  DatePickerPrimitive.MonthSelectProps
>;
const DatePickerMonthSelect = withParts<DatePickerMonthSelectProps>(
  DatePickerPrimitive.MonthSelect,
  'month-select',
);

export type DatePickerPositionerProps = Assign<
  HTMLStyledProps<'div'>,
  DatePickerPrimitive.PositionerProps
>;
const DatePickerPositioner = withParts<DatePickerPositionerProps>(
  DatePickerPrimitive.Positioner,
  'positioner',
);

export type DatePickerContentProps = Assign<
  HTMLStyledProps<'div'>,
  DatePickerPrimitive.ContentProps
>;
const DatePickerContent = withParts<DatePickerContentProps>(
  DatePickerPrimitive.Content,
  'content',
);

export type DatePickerProps = DatePickerRootProps;

const DatePickerComponent = (props: DatePickerProps) => {
  return (
    <DatePickerRoot {...props}>
      <DatePickerLabel>Label</DatePickerLabel>
      <DatePickerControl>
        <DatePickerInput asChild>
          <Input />
        </DatePickerInput>
        <DatePickerTrigger>
          <span role="img" aria-label="calendar">
            📅
          </span>
        </DatePickerTrigger>
        <DatePickerClearTrigger>Clear</DatePickerClearTrigger>
      </DatePickerControl>
      <Portal>
        <DatePickerPositioner>
          <DatePickerContent>
            <DatePickerYearSelect />
            <DatePickerMonthSelect />
            <DatePickerView view="day">
              <DatePickerContext>
                {(datePicker) => (
                  <>
                    <DatePickerViewControl>
                      <DatePickerPrevTrigger>Prev</DatePickerPrevTrigger>
                      <DatePickerViewTrigger>
                        <DatePickerRangeText />
                      </DatePickerViewTrigger>
                      <DatePickerNextTrigger>Next</DatePickerNextTrigger>
                    </DatePickerViewControl>
                    <DatePickerTable>
                      <DatePickerTableHead>
                        <DatePickerTableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePickerTableHeader key={id}>
                              {weekDay.short}
                            </DatePickerTableHeader>
                          ))}
                        </DatePickerTableRow>
                      </DatePickerTableHead>
                      <DatePickerTableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePickerTableRow key={id}>
                            {week.map((day, id) => (
                              <DatePickerTableCell key={id} value={day}>
                                <DatePickerTableCellTrigger>
                                  {day.day}
                                </DatePickerTableCellTrigger>
                              </DatePickerTableCell>
                            ))}
                          </DatePickerTableRow>
                        ))}
                      </DatePickerTableBody>
                    </DatePickerTable>
                  </>
                )}
              </DatePickerContext>
            </DatePickerView>
            <DatePickerView view="month">
              <DatePickerContext>
                {(datePicker) => (
                  <>
                    <DatePickerViewControl>
                      <DatePickerPrevTrigger>Prev</DatePickerPrevTrigger>
                      <DatePickerViewTrigger>
                        <DatePickerRangeText />
                      </DatePickerViewTrigger>
                      <DatePickerNextTrigger>Next</DatePickerNextTrigger>
                    </DatePickerViewControl>
                    <DatePickerTable>
                      <DatePickerTableBody>
                        {datePicker
                          .getMonthsGrid({ columns: 4, format: 'short' })
                          .map((months, id) => (
                            <DatePickerTableRow key={id}>
                              {months.map((month, id) => (
                                <DatePickerTableCell
                                  key={id}
                                  value={month.value}
                                >
                                  <DatePickerTableCellTrigger>
                                    {month.label}
                                  </DatePickerTableCellTrigger>
                                </DatePickerTableCell>
                              ))}
                            </DatePickerTableRow>
                          ))}
                      </DatePickerTableBody>
                    </DatePickerTable>
                  </>
                )}
              </DatePickerContext>
            </DatePickerView>
            <DatePickerView view="year">
              <DatePickerContext>
                {(datePicker) => (
                  <>
                    <DatePickerViewControl>
                      <DatePickerPrevTrigger>Prev</DatePickerPrevTrigger>
                      <DatePickerViewTrigger>
                        <DatePickerRangeText />
                      </DatePickerViewTrigger>
                      <DatePickerNextTrigger>Next</DatePickerNextTrigger>
                    </DatePickerViewControl>
                    <DatePickerTable>
                      <DatePickerTableBody>
                        {datePicker
                          .getYearsGrid({ columns: 4 })
                          .map((years, id) => (
                            <DatePickerTableRow key={id}>
                              {years.map((year, id) => (
                                <DatePickerTableCell
                                  key={id}
                                  value={year.value}
                                >
                                  <DatePickerTableCellTrigger>
                                    {year.label}
                                  </DatePickerTableCellTrigger>
                                </DatePickerTableCell>
                              ))}
                            </DatePickerTableRow>
                          ))}
                      </DatePickerTableBody>
                    </DatePickerTable>
                  </>
                )}
              </DatePickerContext>
            </DatePickerView>
          </DatePickerContent>
        </DatePickerPositioner>
      </Portal>
    </DatePickerRoot>
  );
};

export const DatePicker = Object.assign(DatePickerComponent, {
  Root: DatePickerRoot,
  Label: DatePickerLabel,
  Control: DatePickerControl,
  Input: DatePickerInput,
  Trigger: DatePickerTrigger,
  ClearTrigger: DatePickerClearTrigger,
  View: DatePickerView,
  Context: DatePickerContext,
  ViewControl: DatePickerViewControl,
  PrevTrigger: DatePickerPrevTrigger,
  ViewTrigger: DatePickerViewTrigger,
  NextTrigger: DatePickerNextTrigger,
  RangeText: DatePickerRangeText,
  Table: DatePickerTable,
  TableHead: DatePickerTableHead,
  TableRow: DatePickerTableRow,
  TableHeader: DatePickerTableHeader,
  TableBody: DatePickerTableBody,
  TableCell: DatePickerTableCell,
  TableCellTrigger: DatePickerTableCellTrigger,
  YearSelect: DatePickerYearSelect,
  MonthSelect: DatePickerMonthSelect,
  Positioner: DatePickerPositioner,
  Content: DatePickerContent,
}) as unknown as typeof DatePickerPrimitive;
