import { DatePicker as DatePickerPrimitive, Portal } from '@ark-ui/react';
import { Input } from '@particles/react';

const DatePickerRoot = DatePickerPrimitive.Root;
const DatePickerLabel = DatePickerPrimitive.Label;
const DatePickerControl = DatePickerPrimitive.Control;
const DatePickerInput = DatePickerPrimitive.Input;
const DatePickerTrigger = DatePickerPrimitive.Trigger;
const DatePickerClearTrigger = DatePickerPrimitive.ClearTrigger;
const DatePickerView = DatePickerPrimitive.View;
const DatePickerContext = DatePickerPrimitive.Context;
const DatePickerViewControl = DatePickerPrimitive.ViewControl;
const DatePickerPrevTrigger = DatePickerPrimitive.PrevTrigger;
const DatePickerViewTrigger = DatePickerPrimitive.ViewTrigger;
const DatePickerNextTrigger = DatePickerPrimitive.NextTrigger;
const DatePickerRangeText = DatePickerPrimitive.RangeText;
const DatePickerTable = DatePickerPrimitive.Table;
const DatePickerTableHead = DatePickerPrimitive.TableHead;
const DatePickerTableRow = DatePickerPrimitive.TableRow;
const DatePickerTableHeader = DatePickerPrimitive.TableHeader;
const DatePickerTableBody = DatePickerPrimitive.TableBody;
const DatePickerTableCell = DatePickerPrimitive.TableCell;
const DatePickerTableCellTrigger = DatePickerPrimitive.TableCellTrigger;
const DatePickerYearSelect = DatePickerPrimitive.YearSelect;
const DatePickerMonthSelect = DatePickerPrimitive.MonthSelect;
const DatePickerPositioner = DatePickerPrimitive.Positioner;
const DatePickerContent = DatePickerPrimitive.Content;

const Component = () => {
  return (
    <DatePickerRoot>
      <DatePickerLabel>Label</DatePickerLabel>
      <DatePickerControl>
        <DatePickerInput asChild>
          <Input />
        </DatePickerInput>
        <DatePickerTrigger>📅</DatePickerTrigger>
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

export const DatePicker = Object.assign(Component, {
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
});
