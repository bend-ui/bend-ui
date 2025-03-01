import { DatePicker as DatePickerPrimitive, Portal } from '@ark-ui/react';

const Component = () => {
  return (
    <DatePickerPrimitive.Root>
      <DatePickerPrimitive.Label>Label</DatePickerPrimitive.Label>
      <DatePickerPrimitive.Control>
        <DatePickerPrimitive.Input />
        <DatePickerPrimitive.Trigger>📅</DatePickerPrimitive.Trigger>
        <DatePickerPrimitive.ClearTrigger>
          Clear
        </DatePickerPrimitive.ClearTrigger>
      </DatePickerPrimitive.Control>
      <Portal>
        <DatePickerPrimitive.Positioner>
          <DatePickerPrimitive.Content>
            <DatePickerPrimitive.YearSelect />
            <DatePickerPrimitive.MonthSelect />
            <DatePickerPrimitive.View view="day">
              <DatePickerPrimitive.Context>
                {(datePicker) => (
                  <>
                    <DatePickerPrimitive.ViewControl>
                      <DatePickerPrimitive.PrevTrigger>
                        Prev
                      </DatePickerPrimitive.PrevTrigger>
                      <DatePickerPrimitive.ViewTrigger>
                        <DatePickerPrimitive.RangeText />
                      </DatePickerPrimitive.ViewTrigger>
                      <DatePickerPrimitive.NextTrigger>
                        Next
                      </DatePickerPrimitive.NextTrigger>
                    </DatePickerPrimitive.ViewControl>
                    <DatePickerPrimitive.Table>
                      <DatePickerPrimitive.TableHead>
                        <DatePickerPrimitive.TableRow>
                          {datePicker.weekDays.map((weekDay, id) => (
                            <DatePickerPrimitive.TableHeader key={id}>
                              {weekDay.short}
                            </DatePickerPrimitive.TableHeader>
                          ))}
                        </DatePickerPrimitive.TableRow>
                      </DatePickerPrimitive.TableHead>
                      <DatePickerPrimitive.TableBody>
                        {datePicker.weeks.map((week, id) => (
                          <DatePickerPrimitive.TableRow key={id}>
                            {week.map((day, id) => (
                              <DatePickerPrimitive.TableCell
                                key={id}
                                value={day}
                              >
                                <DatePickerPrimitive.TableCellTrigger>
                                  {day.day}
                                </DatePickerPrimitive.TableCellTrigger>
                              </DatePickerPrimitive.TableCell>
                            ))}
                          </DatePickerPrimitive.TableRow>
                        ))}
                      </DatePickerPrimitive.TableBody>
                    </DatePickerPrimitive.Table>
                  </>
                )}
              </DatePickerPrimitive.Context>
            </DatePickerPrimitive.View>
            <DatePickerPrimitive.View view="month">
              <DatePickerPrimitive.Context>
                {(datePicker) => (
                  <>
                    <DatePickerPrimitive.ViewControl>
                      <DatePickerPrimitive.PrevTrigger>
                        Prev
                      </DatePickerPrimitive.PrevTrigger>
                      <DatePickerPrimitive.ViewTrigger>
                        <DatePickerPrimitive.RangeText />
                      </DatePickerPrimitive.ViewTrigger>
                      <DatePickerPrimitive.NextTrigger>
                        Next
                      </DatePickerPrimitive.NextTrigger>
                    </DatePickerPrimitive.ViewControl>
                    <DatePickerPrimitive.Table>
                      <DatePickerPrimitive.TableBody>
                        {datePicker
                          .getMonthsGrid({ columns: 4, format: 'short' })
                          .map((months, id) => (
                            <DatePickerPrimitive.TableRow key={id}>
                              {months.map((month, id) => (
                                <DatePickerPrimitive.TableCell
                                  key={id}
                                  value={month.value}
                                >
                                  <DatePickerPrimitive.TableCellTrigger>
                                    {month.label}
                                  </DatePickerPrimitive.TableCellTrigger>
                                </DatePickerPrimitive.TableCell>
                              ))}
                            </DatePickerPrimitive.TableRow>
                          ))}
                      </DatePickerPrimitive.TableBody>
                    </DatePickerPrimitive.Table>
                  </>
                )}
              </DatePickerPrimitive.Context>
            </DatePickerPrimitive.View>
            <DatePickerPrimitive.View view="year">
              <DatePickerPrimitive.Context>
                {(datePicker) => (
                  <>
                    <DatePickerPrimitive.ViewControl>
                      <DatePickerPrimitive.PrevTrigger>
                        Prev
                      </DatePickerPrimitive.PrevTrigger>
                      <DatePickerPrimitive.ViewTrigger>
                        <DatePickerPrimitive.RangeText />
                      </DatePickerPrimitive.ViewTrigger>
                      <DatePickerPrimitive.NextTrigger>
                        Next
                      </DatePickerPrimitive.NextTrigger>
                    </DatePickerPrimitive.ViewControl>
                    <DatePickerPrimitive.Table>
                      <DatePickerPrimitive.TableBody>
                        {datePicker
                          .getYearsGrid({ columns: 4 })
                          .map((years, id) => (
                            <DatePickerPrimitive.TableRow key={id}>
                              {years.map((year, id) => (
                                <DatePickerPrimitive.TableCell
                                  key={id}
                                  value={year.value}
                                >
                                  <DatePickerPrimitive.TableCellTrigger>
                                    {year.label}
                                  </DatePickerPrimitive.TableCellTrigger>
                                </DatePickerPrimitive.TableCell>
                              ))}
                            </DatePickerPrimitive.TableRow>
                          ))}
                      </DatePickerPrimitive.TableBody>
                    </DatePickerPrimitive.Table>
                  </>
                )}
              </DatePickerPrimitive.Context>
            </DatePickerPrimitive.View>
          </DatePickerPrimitive.Content>
        </DatePickerPrimitive.Positioner>
      </Portal>
    </DatePickerPrimitive.Root>
  );
};

export const DatePicker = Object.assign(Component, {
  Root: DatePickerPrimitive.Root,
  Label: DatePickerPrimitive.Label,
  Control: DatePickerPrimitive.Control,
  Input: DatePickerPrimitive.Input,
  Trigger: DatePickerPrimitive.Trigger,
  ClearTrigger: DatePickerPrimitive.ClearTrigger,
  View: DatePickerPrimitive.View,
  Context: DatePickerPrimitive.Context,
  ViewControl: DatePickerPrimitive.ViewControl,
  PrevTrigger: DatePickerPrimitive.PrevTrigger,
  ViewTrigger: DatePickerPrimitive.ViewTrigger,
  NextTrigger: DatePickerPrimitive.NextTrigger,
  RangeText: DatePickerPrimitive.RangeText,
  Table: DatePickerPrimitive.Table,
  TableHead: DatePickerPrimitive.TableHead,
  TableRow: DatePickerPrimitive.TableRow,
  TableHeader: DatePickerPrimitive.TableHeader,
  TableBody: DatePickerPrimitive.TableBody,
  TableCell: DatePickerPrimitive.TableCell,
  TableCellTrigger: DatePickerPrimitive.TableCellTrigger,
  YearSelect: DatePickerPrimitive.YearSelect,
  MonthSelect: DatePickerPrimitive.MonthSelect,
  Positioner: DatePickerPrimitive.Positioner,
  Content: DatePickerPrimitive.Content,
});
